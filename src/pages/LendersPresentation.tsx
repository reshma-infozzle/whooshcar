import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Handshake,
  FileCheck,
  Shield,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  ShieldCheck,
  Download,
  BarChart3,
  Target,
  Percent,
  Lightbulb,
  Rocket
} from "lucide-react";

const API_URL = "https://admin.whooshcarfinance.co.uk/api/lenders";

const IMAGE_BASE_URL = "https://admin.whooshcarfinance.co.uk/storage/";


export default function LendersPresentation() {
  const [page, setPage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

    // Helper functions for Market Coverage parsing
  const extractCities = (htmlString: string) => {
    if (!htmlString) return [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    return Array.from(tempDiv.querySelectorAll('p'))
      .map((p: Element) => (p.textContent || '').trim())
      .filter(Boolean);
  };

  const extractAdvantages = (htmlString: string) => {
    if (!htmlString) return [];

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    return Array.from(tempDiv.querySelectorAll('li'))
      .map((li) => {
        const text = (li.textContent || '').trim();
        // Remove existing bullet if present (•, -, *, etc.)
        return text.replace(/^[\s•\-\*]+/, '').trim();
      })
      .filter(Boolean)
      .map(text => `• ${text}`);   // Add clean bullet
  };

  const extractGrowthItems = (htmlString: string) => {
    if (!htmlString) return [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    return Array.from(tempDiv.querySelectorAll('li p'))
      .map((p: Element) => (p.textContent || '').trim().replace(/^•\s*/, ''))
      .filter(Boolean);
  };


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const resolved = json?.data?.data ?? json?.data;
        if (!Array.isArray(resolved) || !resolved[0]) {
          throw new Error("Invalid API response");
        }
        setPage(resolved[0]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!page) return null;

  const cities = extractCities(page.major_market_list || '');
  const advantages = extractAdvantages(page.strategic_advantage_list || '');
  const year1Items = extractGrowthItems(page.year_1_description || '');
  const year2Items = extractGrowthItems(page.year_2_description || '');
  const year3Items = extractGrowthItems(page.year_3_description || '');
  
  return (
    <>
      <Helmet>
        <title>{page.buisness_plan_title} | WHOOSH Finance</title>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16 space-y-20">

{/* HERO CARD */}
<section className="pt-28 pb-24">
  <div
    className="
      max-w-[1080px]
      mx-auto
      border-[4px] border-black
      shadow-[3px_3px_0_#000]
      rounded-[22px]
      bg-white
      px-[56px]
      py-[52px]
    "
  >
    {/* BADGE */}
    <div className="flex justify-center mb-7">
      <span
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-[#CFF6E3]
          px-5 py-[10px]
          text-[14px]
          font-semibold
          text-black
        "
      >
        <span
          className="
            w-[18px] h-[18px]
            rounded-[4px]
            border-2 border-black
            flex items-center justify-center
          "
        >
          <span className="w-[6px] h-[6px] bg-black rounded-sm" />
        </span>
        {page.buisness_plan_title}
      </span>
    </div>

    {/* TITLE */}
    <div
      className="
        text-center
        font-comic
        font-black
        uppercase
        tracking-[0.04em]
        text-[46px] md:text-[58px]
        leading-tight
        text-[#F4C400]
        mb-7
      "
      dangerouslySetInnerHTML={{ __html: page.finance_business_title }}
    />

    {/* DESCRIPTION */}
    <p
      className="
        text-center
        max-w-3xl
        mx-auto
        text-[17px]
        leading-relaxed
        text-gray-700
        mb-14
      "
    >
      {page.finance_business_description}
    </p>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-3 gap-7 mb-14">
      {/* Growth */}
      <div className="bg-[#FFFBEA] rounded-[14px] p-7">
        <TrendingUp className="w-[22px] h-[22px] text-[#F4C400] mb-3" />
        <h3 className="font-extrabold text-[18px] mb-2">
          {page.growth_title}
        </h3>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {page.growth_title_description}
        </p>
      </div>

      {/* FCA */}
      <div className="bg-[#FFFBEA] rounded-[14px] p-7">
        <ShieldCheck className="w-[22px] h-[22px] text-[#F4C400] mb-3" />
        <h3 className="font-extrabold text-[18px] mb-2">
          {page.fca_title}
        </h3>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {page.fca_description}
        </p>
      </div>

      {/* Partnership */}
      <div className="bg-[#FFFBEA] rounded-[14px] p-7">
        <Handshake className="w-[22px] h-[22px] text-[#F4C400] mb-3" />
        <h3 className="font-extrabold text-[18px] mb-2">
          {page.partnership_title}
        </h3>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {page.partnership_description}
        </p>
      </div>
    </div>

    {/* CTA BUTTONS */}
    <div className="flex justify-center gap-5">
      <a href={page.become_parter_button_url}>
        <button
          className="
            flex items-center gap-2
    h-[50px]
    px-7
    bg-[#F4C400]
    border-[3px] border-black
    rounded-[10px]
    font-comic font-black
    text-[16px]
    tracking-[0.01em]
    shadow-[3px_3px_0_#000]
    hover:translate-y-[1px]
    hover:shadow-[2px_2px_0_#000]
    transition

          "
        >
          <Handshake className="w-[16px] h-[16px]" />
          {page.become_parter_button_text}
        </button>
      </a>

      <a href={page.download_full_button_url}>
        <button
          className="
          flex items-center gap-2
    h-[50px]
    px-7
    bg-white
    border-[3px] border-black
    rounded-[10px]
    font-comic font-black
    text-[16px]
    tracking-[0.01em]
    shadow-[3px_3px_0_#000]
    hover:bg-[#CFF6E3]
    hover:translate-y-[1px]
    hover:shadow-[2px_2px_0_#000]
    transition

          "
        >
          <Download className="w-[16px] h-[16px]" />
          {page.download_full_button_text}
        </button>
      </a>
    </div>
  </div>
</section>

      


        {/* EXECUTIVE SUMMARY */}
        <section className="comic-panel max-w-5xl mx-auto p-8">
          <h2 className="text-4xl font-comic text-center mb-8 text-foreground">{page.summary_title}</h2>
          <div
            className="text-muted-foreground space-y-3"
            dangerouslySetInnerHTML={{ __html: page.summary_description }}
          />
        </section>

      {/* ================= COMPANY OVERVIEW SECTION ================= */}
<section>
  <div className="max-w-[1200px] mx-auto">

    {/* SECTION TITLE */}
    <h2 className="text-4xl font-comic text-center mb-12 text-foreground">
      {page.who_are_cookie_title}
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT: COMPANY OVERVIEW CARD */}
      <div className="border-[4px] border-black shadow-[6px_6px_0_#000] rounded-[24px] bg-white px-[40px] py-[40px] flex flex-col justify-between">

        <div className="space-y-6 text-[18px] leading-[28px] text-[#374151] whitespace-pre-line">
          {page.who_are_cookie_description}
        </div>

{/* OVERVIEW BADGES */}
{page.overview_points?.length > 0 && (
  <div className="flex flex-wrap gap-3 mt-8">
    {page.overview_points.map((item, index) => (
      <span
        key={index}
        className="
          bg-[#F4C400]
          text-black
          text-[13px]
          font-bold
          px-4
          py-2
          rounded-full
          leading-none
        "
      >
        {item.overview_points_text}
      </span>
    ))}
  </div>
)}
</div>



      {/* RIGHT: REGULATORY INFORMATION CARD */}
      <div className="border-[4px] border-black shadow-[6px_6px_0_#000] rounded-[24px] bg-white px-[40px] py-[40px]">

        <h3 className="text-xl font-bold mb-4 text-center">
          {page.regulatory_info_title}
        </h3>

        {/* REGULATORY LIST */}
        <div className="space-y-4 text-[15px] text-[#374151]">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{page.fca_numer_title}</span>
            <span className="font-mono">{page.fca_numer_value}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{page.company_numer_title}</span>
            <span className="font-mono">{page.company_numer_value}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{page.ico_reg_title}:</span>
            <span className="font-mono">{page.ico_reg_value}</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="shrink-0 bg-border h-[1px] w-full mt-4" />

        {/* COMPLIANCE TEXT */}
        <p className="text-center text-xs text-muted-foreground mt-4 mb-4">
          {page.regulatory_info_description}
        </p>

        {/* DIVIDER */}
        <div className="shrink-0 bg-border h-[1px] w-full  mb-6" />

        {/* LOCATION */}
        <h4 className="font-semibold mb-3 text-center">Location</h4>
        <p className="text-sm text-center text-muted-foreground">
          {page.location_description}
        </p>

      </div>
    </div>
  </div>
</section>



{/* FINANCIAL STABILITY SECTION */}
<section>
  <div className="
    max-w-[1080px]
    mx-auto
    border-[4px]
    border-black
    rounded-[26px]
    bg-white
    px-[56px]
    py-[52px]
    flex
    gap-8
    shadow-[6px_6px_0_#000]
  ">
    {/* ICON */}
    <div className="flex-shrink-0">
      <div className="w-[64px] h-[64px] rounded-full bg-[#FFF7D6] flex items-center justify-center">
        {/* Shield Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F4C400"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" />
        </svg>
      </div>
    </div>

    {/* CONTENT */}
    <div>
      <h2 className="text-2xl font-comic mb-4 text-foreground">
        {page.financial_stability_title}
      </h2>

      <p className="
        text-[16px]
        leading-[1.7]
        text-[#4B5563]
        whitespace-pre-line
      ">
        {page.financial_stability_description}
      </p>
    </div>
  </div>
</section>


{/* MEET THE WHOOSH TEAM */}
<section className="max-w-[1080px] mx-auto">
  {/* <div className="max-w-[1080px] mx-auto border-[4px] border-black rounded-[22px] bg-white px-[56px] py-[52px]"> */}

    {/* Title */}
    <h2 className="text-3xl font-comic text-center mb-4 text-foreground">
      {page.whoosh_team_title}
    </h2>

    {/* Description */}
    <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
      {page.whoosh_team_description}
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {page.team_members?.map((member: any, index: number) => (
        <div
          key={index}
          className="bg-[#FFFFFF] border-[3px] border-black rounded-[18px] px-6 py-8 text-center flex flex-col transition-all duration-300 ease-out hover:shadow-[6px_6px_0_#000] hover:-translate-y-1"
          // className="bg-[#FFFBEA] border-[3px] border-black rounded-[18px] px-6 py-8 text-center flex flex-col"
        >
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
            <img 
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${member.team_member_image}`}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="font-bold text-[18px] text-black mb-2">
            {member.team_member_name}
          </h3>

          {/* Designation */}
          <span className="inline-block mx-auto bg-[#CFF7E8] text-black text-[13px] font-semibold px-4 py-1 rounded-full mb-4">
            {member.team_member_designation}
          </span>

          {/* Description */}
          <p className="text-[14px] leading-relaxed text-[#374151]">
            {member.team_member_description}
          </p>
        </div>
      ))}
    </div>

  {/* </div> */}
</section>





        {/* KEY BUSINESS METRICS */}
<section>
  <h2 className="text-[40px] font-comic font-black text-center mb-14 text-[#1F2937]">
    {page.key_business_title}
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">

    {page.key_business_metrics?.map((item: any, index: number) => {
      const icons = [
        <TrendingUp size={28} />,
        <BarChart3 size={28} />,
        <Target size={28} />,
        <Percent size={28} />,
        <MapPin size={28} />,
        <ShieldCheck size={28} />,
      ];

      return (
        <div
          key={index}
          className="rounded-lg
    bg-card
    text-card-foreground
    text-center
    border-2 border-black
    shadow-none
    transition-all duration-300
    hover:shadow-[4px_4px_0_#000]
    hover:-translate-y-[2px]
    p-4
"
        >
          {/* ICON */}
          <div className="flex justify-center mb-4 text-[#F4C400]">
            {icons[index] ?? <Target size={28} />}
          </div>

          {/* VALUE */}
          <div className="text-2xl font-bold text-primary">
            {item.business_metrics_value}
          </div>

          {/* LABEL */}
          <div className="text-xs text-muted-foreground">
            {item.business_metrics_text}
          </div>
        </div>
      );
    })}
  </div>
</section>


        {/* FINANCIAL PROJECTIONS */}
<section className="py-24 bg-[#F8F6ED]">
  <div className="max-w-[1080px] mx-auto">

    {/* TITLE */}
    <h2 className="text-[40px] font-comic font-black text-center mb-14 text-[#1F2937]">
      {page["3_year_financial_title"]}
    </h2>

    {/* YEAR CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

      {page.financial_year_projections?.map((year: any, i: number) => (
        <div
          key={i}
          className="
            bg-white
            border-[2px] border-black
            rounded-lg
            overflow-hidden
            text-center
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[6px_6px_0px_#000]
          "
        >
          {/* YEAR HEADER */}
          <div className="bg-[#FFFBEA] py-4">
            <h3 className="text-[20px] font-bold text-[#1F2937]">
              {year.year_title}
            </h3>
          </div>

          {/* BODY */}
          <div className="px-6 py-6">
            <div className="text-[34px] font-black text-[#F4C400]">
              {year.year_1_total_revenue}
            </div>

            <div className="text-[14px] text-[#6B7280] mb-4">
              {year.year_1_total_text}
            </div>

            <div className="h-[1px] bg-[#D1D5DB] my-4"></div>

            <div className="space-y-2 text-[14px] text-[#1F2937] text-left">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{year.estimated_deals_title}</span>
                <span className="font-semibold">{year.estimated_deals_value}</span>
              </div>

            <div className="h-[1px] bg-[#D1D5DB] my-4"></div>

              <div className="flex justify-between">
                <span className="text-[#6B7280]">{year.net_profit_title}</span>
                <span className="font-semibold text-[#F4C400]">
                  {year.net_profit_value}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#6B7280]">{year.profit_margin_title}</span>
                <span className="font-semibold">
                  {year.profit_margin_value}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>

    {/* REVENUE GROWTH STRATEGY */}
    {page.revenue_growth_title && (
      <div
        className="
          bg-[#F9F8F5]
          border-[4px] border-black
          rounded-[18px]
          px-8 py-6
          max-w-[900px]
          mx-auto
          transition-all duration-300
          translate-y-1
          shadow-[6px_6px_0px_#000]
        "
      >
        <div className="flex items-start gap-3 mb-2">
          <span className="text-[#F4C400] text-xl">📈</span>
          <h3 className="font-bold text-[18px] text-[#1F2937]">
            {page.revenue_growth_title}
          </h3>
        </div>

        <p className="text-[14px] leading-relaxed text-[#374151]">
          {page.revenue_growth_description}
        </p>
      </div>
    )}

  </div>
</section>


        {/* TARGET AUDIENCE */}
<section>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-4xl font-comic text-center mb-8 text-foreground">
      {page.our_target_title}
    </h2>

    {/* DESCRIPTION */}
    <p className="text-center text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
      {page.our_target_description}
    </p>

    {/* AUDIENCE CARDS */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Established Professionals */}
      <div className="
        bg-white
        border-[2px] border-black
        rounded-[16px]
        px-8 py-6
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[6px_6px_0_#000]
      ">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-[#F4C400] text-xl">👥</span>
          <h3 className="font-semibold tracking-tight text-lg">
            {page.established_professional_title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base">
          {page.established_professional_description}
        </p>
      </div>

      {/* Lifestyle Buyers */}
      <div className="
        bg-white
        border-[2px] border-black
        rounded-[16px]
        px-8 py-6
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[6px_6px_0_#000]
      ">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-[#F4C400] text-xl">❤️</span>
          <h3 className="font-semibold tracking-tight text-lg">
            {page.lifestyle_title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base">
          {page.lifestyle_description}
        </p>
      </div>

      {/* Business Owners */}
      <div className="
        bg-white
        border-[2px] border-black
        rounded-[16px]
        px-8 py-6
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[6px_6px_0_#000]
      ">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-[#F4C400] text-xl">🏢</span>
          <h3 className="font-semibold tracking-tight text-lg">
            {page.business_owners_title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base">
          {page.business_owners_description}
        </p>
      </div>

      {/* Family Upgraders */}
      <div className="
        bg-white
        border-[2px] border-black
        rounded-[16px]
        px-8 py-6
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[6px_6px_0_#000]
      ">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-[#F4C400] text-xl">📈</span>
          <h3 className="font-semibold tracking-tight text-lg">
            {page.family_upgraders_title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base">
          {page.family_upgraders_description}
        </p>
      </div>

    </div>

    {/* WHY THESE AUDIENCES MATTER */}
    {page.audience_matter_title && (
      <div className="
        mt-16
        bg-[#F8F6ED]
        border-[4px] border-black
        rounded-[18px]
        px-10 py-8
        max-w-[900px]
        mx-auto
        transition-all duration-300
        -translate-y-[2px]
        shadow-[6px_6px_0_#000]
      ">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-[#F4C400] text-xl">🎯</span>
          <h3 className="font-bold mb-2 text-lg">
            {page.audience_matter_title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {page.audience_matter_description}
        </p>
      </div>
    )}

  </div>
</section>


{/* WHY PARTNER WITH WHOOSH */}
<section className="py-24 bg-[#F9F8EF]">
  <div className="max-w-[1080px] mx-auto">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-comic text-center mb-8 text-foreground">
      {page.partner_whoosh_title}
    </h2>

    {/* DESCRIPTION */}
    <p className="text-center text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
      {page.partner_whoosh_description}
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: page.industry_experience_title,
          desc: page.industry_experience_description,
          icon: "🎓",
        },
        {
          title: page.quality_driven_title,
          desc: page.quality_driven_description,
          icon: "🧲",
        },
        {
          title: page.speed_efficiency_title,
          desc: page.speed_efficiency_description,
          icon: "⚡",
        },
        {
          title: page.leisure_market_title,
          desc: page.leisure_market_description,
          icon: "🚐",
        },
        {
          title: page.transparent_title,
          desc: page.transparent_description,
          icon: "🤝",
        },
        {
          title: page.scalable_growth_title,
          desc: page.scalable_growth_description,
          icon: "🛡️",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            bg-[#F9F8F5]
            border-[2px] border-black
            rounded-[10px]
            px-8 py-7
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:shadow-[6px_6px_0_#000]
          "
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-[#F4C400] text-xl">
              {item.icon}
            </span>

            <h3 className="font-semibold tracking-tight text-lg">
              {item.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


{/* FINANCE PRODUCTS WE BROKER */}
  <section className="mb-16">
    <div className="comic-panel p-8 mx-auto border-[4px] border-black rounded-[16px] bg-white">

      {/* TITLE */}
      <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
        {page.finance_product_title}
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[820px] mx-auto">

        {page.finance_products?.map((item: any, index: number) => (
          <div
            key={index}
            className="
              flex items-center gap-3
              bg-[#F5F2EC]
              px-6 py-4
              rounded-[8px]
              text-[16px]
              font-semibold
              text-[#111827]
            "
          >
            {/* CHECK ICON */}
            <span className="text-[#F4C400] text-xl">✔</span>

            {/* TEXT */}
            <span className="font-medium">{item.finance_products_text}</span>
          </div>
        ))}

      </div>

    </div>
  </section>


  {/* PARTNERSHIP BENEFITS */}
  <section>

    {/* TITLE */}
    <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
      {page.partnership_benefits_title}
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: page.quality_leads_title,
          desc: page.quality_leads_description,
          icon: "👥",
        },
        {
          title: page.rapid_turnaround_title,
          desc: page.rapid_turnaround_description,
          icon: "⏱",
        },
        {
          title: page.transparent_commission_title,
          desc: page.transparent_commission_description,
          icon: "💰",
        },
        {
          title: page.risk_mitigation_title,
          desc: page.risk_mitigation_description,
          icon: "🛡",
        },
        {
          title: page.technology_integration_title,
          desc: page.technology_integration_description,
          icon: "📊",
        },
        {
          title: page.ongoing_support_title,
          desc: page.ongoing_support_description,
          icon: "🤝",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            bg-white
            border-[2px] border-black
            rounded-[10px]
            px-6 py-6
            bg-card text-card-foreground shadow-sm
          "
        >
          {/* HEADER */}
          <div className="flex items-start gap-3 mb-3">
            <span className="text-[#F4C400] text-xl">{item.icon}</span>
            <h3 className="font-semibold tracking-tight text-lg">
              {item.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted-foreground">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </section>


{/* RISK MANAGEMENT & COMPLIANCE */}
<section>
  {/* SECTION TITLE */}
  <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
    {page.risk_managment_title}
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* LEFT: KEY RISKS IDENTIFIED */}
    {page.key_risk_title && page.key_risk_description && (
      <div className="bg-white border-[2px] border-black rounded-[20px] px-10 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#F4C400] text-[22px] leading-none">⚠️</span>
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            {page.key_risk_title}
          </h3>
        </div>

        {/* HTML CONTENT */}
      <div
        className="
          text-[15px] leading-[1.7] text-gray-700 font-sans

          [&_p]:mb-3

          /* Headings */
          [&_p>strong]:block
          [&_p>strong]:text-[16px]
          [&_p>strong]:font-bold
          [&_p>strong]:text-gray-900

          /* Mitigation inline */
          [&_p:nth-child(even)>strong]:inline
          [&_p:nth-child(even)>strong]:mr-1.5

          /* Divider ONLY before sections except first */
          [&_p:nth-child(odd):not(:first-child)]:mt-6
          [&_p:nth-child(odd):not(:first-child)]:pt-6
          [&_p:nth-child(odd):not(:first-child)]:border-t
          [&_p:nth-child(odd):not(:first-child)]:border-gray-300
        "
        dangerouslySetInnerHTML={{ __html: page.key_risk_description }}
      />

      </div>
    )}

    {/* RIGHT: COMPLIANCE FRAMEWORK */}
    {page.compliance_title && page.compliance_description && (
      <div className="bg-white border-[2px] border-black rounded-[20px] px-10 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#F4C400] text-[22px] leading-none">🛡️</span>
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            {page.compliance_title}
          </h3>
        </div>

        {/* HTML CONTENT */}
        <div
          className="compliance-html"
          dangerouslySetInnerHTML={{ __html: page.compliance_description }}
        />
      </div>
    )}
  </div>
</section>



{/* Market Coverage */}
        <section className="mb-16">
          <div className="comic-panel p-8">
            <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
              {page.nationwide_market_title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{page.major_market_title}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city: string) => (
                    <div key={city} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{page.strategic_advantage_title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {advantages.map((advantage: string, index: number) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* 3-Year Growth Strategy */}
    <section className="mb-16">
      <div className="comic-panel p-8">
        <h2 className="text-3xl font-comic text-center mb-8 text-foreground">
          {page['3_year_growth_title']}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              {page.year_1_title}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {year1Items.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              {page.year_2_title}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {year2Items.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              {page.year_3_title}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {year3Items.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

{/* CONTACT */}
<section className="text-center">
  <div className="comic-panel p-8 max-w-4xl mx-auto">
    <h2 className="text-3xl font-comic mb-6 text-foreground">
      {page.lets_build_title}
    </h2>
    <p className="text-lg text-muted-foreground mb-8">
      {page.lets_build_description}
    </p>
    
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="text-center">
        <h3 className="font-bold mb-4">{page.partnership_enquiries_title}</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{page.contact_number}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{page.email_address}</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold mb-4">{page.head_office_title}</h3>
        <div className="text-sm text-muted-foreground whitespace-pre-line">
          {page.head_office_description}
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* <PartnerApplicationDialog>
        <Button size="lg" className="text-lg px-8" asChild>
          <a href={page.express_interest_button_url}>
            <Handshake className="w-5 h-5 mr-2" />
            {page.express_interest_button_text}
          </a>
        </Button>
      </PartnerApplicationDialog>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="text-lg px-8"
        onClick={handleDownloadPDF}
        disabled={isGeneratingPDF}
      >
        <FileCheck className="w-5 h-5 mr-2" />
        {isGeneratingPDF ? "Generating PDF..." : page.download_full_button_text}
      </Button> */}
      
      <Button 
        variant="outline" 
        size="lg" 
        className="text-lg px-8"
        asChild
      >
        <a href={page.shedule_call_button_url}>
          <Phone className="w-5 h-5 mr-2" />
          {page.shedule_call_text}
        </a>
      </Button>
    </div>
  </div>
</section>


      </main>

      <Footer />
    </>
  );
}
