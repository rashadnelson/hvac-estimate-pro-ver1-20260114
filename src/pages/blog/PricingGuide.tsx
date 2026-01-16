import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Article structured data for SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HVAC Pricing Guide: How Much to Charge for HVAC Jobs [2026]",
  "description": "Complete pricing guide for HVAC technicians. Learn how much to charge for common HVAC jobs, calculate your costs, and maximize profitability.",
  "image": "https://hvacestimatepro.dev/og-image.png",
  "author": {
    "@type": "Organization",
    "name": "HVAC Estimate Pro",
    "url": "https://hvacestimatepro.dev"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HVAC Estimate Pro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hvacestimatepro.dev/favicon.svg"
    }
  },
  "datePublished": "2026-01-01",
  "dateModified": "2026-01-14",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hvacestimatepro.dev/blog/pricing-guide"
  }
};

const PricingGuide = () => {
  const relatedPosts = [
    {
      title: "How to Create HVAC Estimates: Complete Guide for HVAC Technicians [2026]",
      slug: "estimate-guide",
      excerpt: "Learn how to create professional HVAC estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid.",
    },
    {
      title: "Best HVAC Estimate Templates: Free vs Paid Options [2026]",
      slug: "template-comparison",
      excerpt: "Compare free HVAC estimate templates, paid options, and software solutions. Learn which option is best for your HVAC business.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Pricing Guide: How Much to Charge [2026] | HVAC Estimate Pro</title>
        <meta 
          name="description" 
          content="Complete pricing guide for HVAC technicians. Learn how much to charge for common HVAC jobs, calculate your costs, and maximize profitability." 
        />
        <meta property="og:title" content="HVAC Pricing Guide: How Much to Charge [2026] | HVAC Estimate Pro" />
        <meta property="og:type" content="article" />
        <meta 
          property="og:description" 
          content="Complete pricing guide for HVAC technicians. Learn how much to charge for common HVAC jobs, calculate your costs, and maximize profitability." 
        />
        <meta property="og:url" content="https://hvacestimatepro.dev/blog/pricing-guide" />
        <link rel="canonical" href="https://hvacestimatepro.dev/blog/pricing-guide" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <BlogLayout>
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            HVAC Pricing Guide: How Much to Charge for HVAC Jobs [2026]
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>10 min read</span>
            <span>•</span>
            <span>Updated January 2026</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Pricing your HVAC services correctly is the difference between a thriving business and barely scraping by. 
              Charge too little, and you'll work yourself to death in 130°F attics without making a profit. Charge too much, 
              and you'll lose jobs to competitors. Finding that sweet spot requires understanding your true costs and the 
              value you provide to customers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In this comprehensive guide, we'll break down exactly how much HVAC contractors should charge for common jobs, 
              how to calculate your real costs including refrigerant and equipment, and pricing strategies that maximize your 
              profitability while remaining competitive in your market.
            </p>
          </section>

          {/* Understanding Your Costs */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Understanding Your True Costs
            </h2>
            <p className="text-muted-foreground mb-4">
              Before you can price effectively, you need to know what it actually costs you to operate. Many HVAC technicians 
              only consider equipment costs and wonder why they're not profitable. Let's break down the real numbers.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Direct Costs</h3>
                <p className="text-muted-foreground">
                  These are costs directly tied to each job: your labor, helper wages, equipment (AC units, furnaces, thermostats), 
                  materials (ductwork, refrigerant, electrical components), subcontractors (electricians for major panel work), 
                  and permits. Direct costs are easy to see because they change with every job. A 4-ton AC installation has very 
                  different direct costs than a furnace tune-up.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Indirect Costs (Overhead)</h3>
                <p className="text-muted-foreground">
                  This is where most HVAC contractors underestimate. Your overhead includes truck payments, fuel (lots of it), 
                  insurance (general liability, vehicle, workers comp), EPA Section 608 certification maintenance, licensing fees, 
                  tool and equipment replacement, refrigerant recovery equipment, gauges and diagnostic tools, shop/storage rent, 
                  phone, internet, marketing, accounting, office supplies, and more. Add it all up annually—most contractors are 
                  shocked to find their overhead is $60,000-100,000 per year.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Calculate Your True Hourly Cost</h3>
                <p className="text-muted-foreground mb-3">
                  Here's a real example for a solo HVAC technician:
                </p>
                <div className="bg-card p-4 rounded-lg border border-border text-sm">
                  <p className="text-muted-foreground mb-2">Annual overhead: $65,000</p>
                  <p className="text-muted-foreground mb-2">Billable hours/year: 1,400 hours (accounting for travel, admin, downtime, slow season)</p>
                  <p className="text-muted-foreground mb-2">Overhead per hour: $65,000 ÷ 1,400 = $46/hour</p>
                  <p className="text-muted-foreground mb-2">Desired personal wage: $35/hour</p>
                  <p className="text-muted-foreground mb-2">Desired profit margin: 15% = $14/hour</p>
                  <p className="text-accent font-semibold mt-3">
                    Minimum labor rate to charge: $95/hour
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  This doesn't include equipment markup. If you're charging $70/hour, you're actually losing money with every job. 
                  You're working for free and slowly going out of business.
                </p>
              </div>
            </div>
          </section>

          {/* Standard Pricing */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Standard Pricing for Common HVAC Jobs
            </h2>
            <p className="text-muted-foreground mb-4">
              Here are typical price ranges for common HVAC jobs in 2026. Remember, prices vary significantly by region, 
              system size, and complexity. Urban areas command 30-50% higher prices. Use these as starting points, not 
              absolute rules.
            </p>

            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">AC Installation</h3>
                  <p className="text-sm text-muted-foreground">Central air, 3-4 ton, 14-16 SEER</p>
                </div>
                <span className="text-accent font-semibold">$3,500-6,000</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Furnace Replacement</h3>
                  <p className="text-sm text-muted-foreground">80,000-100,000 BTU, 80-96% AFUE</p>
                </div>
                <span className="text-accent font-semibold">$2,500-5,000</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Duct Cleaning</h3>
                  <p className="text-sm text-muted-foreground">Whole house, standard system</p>
                </div>
                <span className="text-accent font-semibold">$300-500</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Thermostat Installation</h3>
                  <p className="text-sm text-muted-foreground">Smart thermostat, standard wiring</p>
                </div>
                <span className="text-accent font-semibold">$200-400</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">HVAC Maintenance</h3>
                  <p className="text-sm text-muted-foreground">Seasonal tune-up, filter change, inspection</p>
                </div>
                <span className="text-accent font-semibold">$150-300</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Refrigerant Recharge</h3>
                  <p className="text-sm text-muted-foreground">R-410A, leak repair + recharge</p>
                </div>
                <span className="text-accent font-semibold">$300-500</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Air Handler Replacement</h3>
                  <p className="text-sm text-muted-foreground">3-4 ton, standard configuration</p>
                </div>
                <span className="text-accent font-semibold">$2,000-4,000</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Vent Installation</h3>
                  <p className="text-sm text-muted-foreground">New supply or return vent with duct run</p>
                </div>
                <span className="text-accent font-semibold">$150-300</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-4 italic">
              Note: Prices vary significantly by region and system size. A 2-ton system in rural Nebraska will cost far less 
              than a 5-ton system in Phoenix. These ranges assume standard complexity—difficult access (crawlspaces, old attics), 
              ductwork modifications, electrical upgrades, or code compliance issues will increase costs by 20-50%.
            </p>
          </section>

          {/* Pricing Strategies */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Pricing Strategies That Work for HVAC
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Flat-Rate vs Hourly Pricing</h3>
                <p className="text-muted-foreground">
                  Flat-rate pricing (fixed price per job) works well for HVAC because most jobs are predictable. AC installations, 
                  furnace replacements, and standard repairs have known labor requirements. Customers prefer knowing the total 
                  cost upfront, and it rewards your efficiency. Hourly pricing works better for diagnostics, troubleshooting 
                  complex problems, or custom ductwork where scope is unclear. Many HVAC contractors use flat rates for installations 
                  and repairs, hourly for diagnostics and uncommmon issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Service Call Minimums</h3>
                <p className="text-muted-foreground">
                  Always set a minimum charge for showing up, typically $150-300. This covers your drive time, diagnostics, 
                  gauges and equipment, and the opportunity cost of not being available for installation work. A service call 
                  to diagnose why an AC isn't cooling takes specialized knowledge and expensive tools—you deserve to be 
                  compensated. Without minimums, you'll waste time on unprofitable service calls.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emergency and After-Hours Premiums</h3>
                <p className="text-muted-foreground">
                  Charge significantly more for after-hours, weekend, and holiday emergencies. A 1.5x to 2x multiplier is 
                  standard and justified. You're sacrificing family time, often working in extreme conditions (no AC on a 95°F 
                  day, no heat in winter), and your expertise is urgently needed. A customer with no AC in Phoenix in July or 
                  no heat in Minnesota in January expects to pay premium rates for immediate service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Seasonal Pricing Considerations</h3>
                <p className="text-muted-foreground">
                  Summer AC work often commands premium pricing due to high demand and brutal working conditions. Attics can reach 
                  130°F. You're literally risking heat exhaustion. Winter heating emergencies are similarly urgent—customers will 
                  pay more when their family is freezing. Off-season installations (AC in fall/winter, heating in spring/summer) 
                  can be discounted 10-15% to fill your schedule during slow months. Smart seasonal pricing maximizes annual revenue.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Maintenance Contract Pricing</h3>
                <p className="text-muted-foreground">
                  Offer annual maintenance plans for recurring revenue. A $250-400/year plan includes spring AC tune-up, fall 
                  furnace inspection, priority scheduling, and discounts on repairs. This creates steady cash flow during slow 
                  seasons, builds long-term customer relationships, and generates service leads when you discover issues during 
                  maintenance visits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Volume Discounts for Property Managers</h3>
                <p className="text-muted-foreground">
                  For property managers with multiple units, offer modest volume discounts (10-15% off standard pricing). You'll 
                  save time working in one complex, and the guaranteed volume of installations/repairs justifies lower per-unit 
                  pricing. Just ensure you're still profitable after the discount—don't give away more than 15% unless it's a 
                  massive project.
                </p>
              </div>
            </div>
          </section>

          {/* How to Present Pricing */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              How to Present Your HVAC Pricing
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Itemized Breakdowns That Build Trust</h3>
                <p className="text-muted-foreground">
                  Don't just give a single number like "$4,500 for AC installation." Break down equipment ($2,800 for 16 SEER 
                  3-ton unit), labor ($1,200 for installation), materials ($350 for refrigerant lines, electrical disconnect, 
                  pad), permits ($150), and haul-away ($100). Transparency builds trust and helps customers understand the value. 
                  It also makes it harder to negotiate when they see all the real costs involved.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Explain Equipment vs Labor Clearly</h3>
                <p className="text-muted-foreground">
                  Many customers don't understand HVAC pricing. They see a $3,000 AC unit at Costco and wonder why your 
                  installation is $5,500. Explain clearly: the unit is $2,800 wholesale, labor is $1,500, refrigerant and 
                  materials are $500, permit is $150, and warranty/disposal is $250. Breaking it down prevents sticker shock 
                  and "you're overcharging" complaints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Offer Good/Better/Best System Options</h3>
                <p className="text-muted-foreground">
                  Present three pricing tiers when possible. Good = 14 SEER builder-grade system with 5-year warranty ($3,800). 
                  Better = 16 SEER mid-tier system with 10-year warranty and WiFi thermostat ($4,800). Best = 18 SEER premium 
                  system with lifetime compressor warranty and smart thermostat ($6,200). Most customers choose the middle option, 
                  but you'd be surprised how many upgrade to best when presented with the benefits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Include Warranty Details to Differentiate</h3>
                <p className="text-muted-foreground">
                  Clearly state your labor warranty (1-2 years typical) and manufacturer equipment warranties (5-10 years parts, 
                  often lifetime compressor). Explain that warranty requires annual maintenance. Extended warranties can be an 
                  upsell opportunity. Good warranties differentiate you from fly-by-night contractors who disappear after 
                  installation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">State Clear Payment Terms</h3>
                <p className="text-muted-foreground">
                  Specify when payment is due. For installations, 50% deposit upfront (to order equipment) and 50% on completion 
                  is standard. For service calls, payment on completion. Accept multiple payment methods (cash, check, credit cards, 
                  financing through third parties). Clear terms prevent payment disputes and cash flow problems. Never start work 
                  without a deposit on large jobs.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Pricing HVAC services correctly is crucial to your business success and long-term survival. It's not just about 
              covering equipment costs—it's about valuing your time, expertise, EPA certification, years of training, and the 
              physical toll of working in extreme conditions. Don't compete on price alone. Compete on quality, reliability, 
              proper sizing, code compliance, and warranty support.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Review your pricing annually. As your costs increase (insurance, refrigerant, fuel, equipment, licensing), your 
              rates must increase too. Track your actual job costs for 3 months to see where your estimates are wrong. And 
              remember: losing a job because you're "too expensive" often means you dodged a problem customer who would have 
              complained about everything. The right customers understand that quality HVAC work costs money—and lasts for 15-20 years.
            </p>
          </section>
        </div>

        {/* CTA */}
        <BlogCTA />

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
};

export default PricingGuide;
