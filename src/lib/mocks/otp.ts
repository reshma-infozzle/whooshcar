/**
 * Mock OTP service for mobile verification
 */

interface OtpRequest {
  mobile: string;
}

interface OtpVerification {
  mobile: string;
  code: string;
}

interface OtpResponse {
  success: boolean;
  message: string;
  expiresIn?: number; // seconds
}

// In-memory store for mock OTP codes
const otpStore = new Map<string, { code: string; expiresAt: number }>();

/**
 * Request OTP code to be sent to mobile
 * Mock: generates a 6-digit code
 */
export const requestOtp = async (request: OtpRequest): Promise<OtpResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { mobile } = request;

  // Validate mobile format
  const cleanMobile = mobile.replace(/\s/g, '');
  if (!cleanMobile.match(/^(\+44|0)7\d{9}$/)) {
    return {
      success: false,
      message: 'Invalid UK mobile number',
    };
  }

  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  otpStore.set(cleanMobile, { code, expiresAt });

  console.log(`[MOCK OTP] Code for ${mobile}: ${code}`);

  return {
    success: true,
    message: `Verification code sent to ${mobile}`,
    expiresIn: 300,
  };
};

/**
 * Verify OTP code
 */
export const verifyOtp = async (verification: OtpVerification): Promise<OtpResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const { mobile, code } = verification;
  const cleanMobile = mobile.replace(/\s/g, '');

  const stored = otpStore.get(cleanMobile);

  if (!stored) {
    return {
      success: false,
      message: 'No verification code found. Please request a new code.',
    };
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(cleanMobile);
    return {
      success: false,
      message: 'Verification code expired. Please request a new code.',
    };
  }

  if (stored.code !== code) {
    return {
      success: false,
      message: 'Incorrect verification code. Please try again.',
    };
  }

  // Success - clean up
  otpStore.delete(cleanMobile);

  return {
    success: true,
    message: 'Mobile number verified successfully',
  };
};

/**
 * Mock: Always accept "123456" as valid code for testing
 */
export const verifyOtpDev = async (verification: OtpVerification): Promise<OtpResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (verification.code === '123456') {
    return {
      success: true,
      message: 'Mobile number verified successfully (dev mode)',
    };
  }

  return verifyOtp(verification);
};
