import { Helmet } from "react-helmet-async";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Article structured data for SEO
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Create HVAC Estimates: Complete Guide for HVAC Technicians [2025]",
  "description": "Learn how to create professional HVAC estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid.",
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
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-14",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hvacestimatepro.dev/blog/estimate-guide"
  }
};

const EstimateGuide = () => {
  const relatedPosts = [
    {
      title: "HVAC Pricing Guide: How Much to Charge for HVAC Jobs [2025]",
      slug: "pricing-guide",
      excerpt: "Complete pricing guide for HVAC technicians. Learn how much to charge for common HVAC jobs, calculate your costs, and maximize profitability.",
    },
    {
      title: "Best HVAC Estimate Templates: Free vs Paid Options [2025]",
      slug: "template-comparison",
      excerpt: "Compare free HVAC estimate templates, paid options, and software solutions. Learn which option is best for your HVAC business.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>How to Create HVAC Estimates: Complete Guide [2025] | HVAC Estimate Pro</title>
        <meta 
          name="description" 
          content="Learn how to create professional HVAC estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid." 
        />
        <meta property="og:title" content="How to Create HVAC Estimates: Complete Guide [2025] | HVAC Estimate Pro" />
        <meta property="og:type" content="article" />
        <meta 
          property="og:description" 
          content="Learn how to create professional HVAC estimates that win more jobs. Complete guide including pricing strategies, what to include, and common mistakes to avoid." 
        />
        <meta property="og:url" content="https://hvacestimatepro.dev/blog/estimate-guide" />
        <link rel="canonical" href="https://hvacestimatepro.dev/blog/estimate-guide" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <BlogLayout>
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            How to Create HVAC Estimates: Complete Guide for HVAC Technicians [2025]
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>10 min read</span>
            <span>•</span>
            <span>Updated January 2025</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              As an HVAC technician, your estimate is often the first professional impression you make on a potential customer. 
              A detailed, accurate estimate doesn't just win you jobs—it sets expectations, builds trust, and protects 
              your business from scope creep and disputes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Yet many HVAC contractors struggle with creating estimates that are both comprehensive and professional. Too vague, 
              and you risk losing money on equipment and refrigerant costs. Too detailed, and you overwhelm the customer. In this guide, 
              we'll show you exactly how to create HVAC estimates that strike the perfect balance and help you win more jobs at 
              profitable rates.
            </p>
          </section>

          {/* What to Include */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              What to Include in an HVAC Estimate
            </h2>
            <p className="text-muted-foreground mb-4">
              Every professional HVAC estimate should include these essential components:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Equipment Costs</h3>
                <p className="text-muted-foreground">
                  List all major equipment with brand names, model numbers, and SEER/AFUE ratings. Include AC units, furnaces, 
                  heat pumps, thermostats, air handlers, and any other system components. Specify tonnage for AC units (e.g., 
                  3-ton, 4-ton) and BTU ratings for furnaces. Customers appreciate knowing exactly what equipment they're getting, 
                  and it protects you from "my neighbor got a cheaper system" complaints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Labor Costs</h3>
                <p className="text-muted-foreground">
                  Break down installation labor, repair time, or maintenance hours with your hourly rate. Include setup time, 
                  system testing, and customer training. For installations, account for ductwork modifications, electrical connections, 
                  condensate drain lines, and refrigerant line sets. Be realistic—AC installations in attics during summer take longer 
                  than you think.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Materials and Supplies</h3>
                <p className="text-muted-foreground">
                  List all materials: ductwork, registers, vents, filters, refrigerant lines, electrical components, disconnect boxes, 
                  condensate pumps, and mounting pads. Don't forget consumables like refrigerant (specify R-410A, R-22, etc.), 
                  sealants, insulation, fasteners, and wire. These add up quickly. Apply a standard markup (20-30%) to cover 
                  storage, transportation, and EPA compliance costs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Permits and Inspection Fees</h3>
                <p className="text-muted-foreground">
                  Most HVAC installations and major repairs require building permits and inspections. Always include permit costs 
                  in your estimate, plus a markup for your time to obtain them and schedule inspections. Being upfront about permits 
                  shows professionalism, ensures code compliance, and protects both you and the homeowner legally.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Disposal and Haul-Away Costs</h3>
                <p className="text-muted-foreground">
                  Removing old HVAC equipment isn't free. You need to properly dispose of refrigerant per EPA regulations, haul 
                  away old units, and pay disposal fees at recycling centers. Factor in truck space, fuel, time, and disposal fees. 
                  A typical haul-away charge ranges from $100-300 depending on system size and accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Timeline and Scheduling</h3>
                <p className="text-muted-foreground">
                  Provide a realistic timeline for when work will begin and how long installation or repair will take. AC installations 
                  typically take 1-2 days, furnace replacements 1 day, and full system replacements 2-3 days. Include contingencies 
                  for weather delays, equipment delivery, or inspection scheduling. Clear timelines prevent customer frustration 
                  and help you manage your job queue.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Warranty Information</h3>
                <p className="text-muted-foreground">
                  State your labor warranty (typically 1-2 years) and manufacturer equipment warranties (often 5-10 years on parts, 
                  sometimes lifetime on compressors). Clarify what's covered and what's not. Specify that warranty requires annual 
                  maintenance. Extended warranty options can be an upsell. A comprehensive warranty builds confidence and 
                  differentiates you from competitors.
                </p>
              </div>
            </div>
          </section>

          {/* How to Price */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              How to Price HVAC Jobs
            </h2>
            <p className="text-muted-foreground mb-4">
              Pricing is part art, part science. Here's how to calculate rates that keep you profitable:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Industry Standard Labor Rates</h3>
                <p className="text-muted-foreground">
                  Most HVAC technicians charge between $85-120 per hour, depending on location, experience, and specialization. 
                  Major metro areas and commercial work command higher rates ($100-150/hour). Service calls typically have a 
                  minimum charge of $150-300. Emergency calls and after-hours work should be 1.5-2x your standard rate. Remember, 
                  you're not just charging for wrench time—you're charging for expertise, EPA certification, and years of training.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Equipment Markup</h3>
                <p className="text-muted-foreground">
                  Apply a 20-30% markup on all equipment purchases. You're not just reselling a box—you're providing expertise 
                  in system sizing, brand selection, warranty management, and installation. Your markup covers the time you spend 
                  coordinating delivery, handling warranty claims, and managing equipment relationships with suppliers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Overhead Calculation</h3>
                <p className="text-muted-foreground">
                  Your overhead includes truck payments, insurance, EPA certification, licensing, tools, refrigerant recovery 
                  equipment, marketing, and office expenses. Calculate your annual overhead and divide by billable hours to find 
                  your overhead per hour. For example, if you have $50,000 in annual overhead and work 1,500 billable hours per year, 
                  that's $33/hour in overhead you must cover before profit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Profit Margins</h3>
                <p className="text-muted-foreground">
                  After covering labor, equipment, materials, and overhead, you need profit. Aim for 15-25% net profit margin. 
                  This isn't greedy—it's what you need to reinvest in your business, buy new tools and diagnostic equipment, 
                  handle slow seasons, and build long-term stability. Profit is what keeps you in business when your truck breaks 
                  down or you need to replace expensive refrigerant recovery equipment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Service Call Minimums</h3>
                <p className="text-muted-foreground">
                  Set a minimum charge for any service call, typically $150-300. This covers your time to drive to the job, 
                  diagnose the problem, and provide an estimate. Include this in your pricing even for "quick" thermostat 
                  replacements or capacitor swaps. Without a minimum, you lose money on small jobs that waste half your day 
                  on drive time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emergency and After-Hours Rates</h3>
                <p className="text-muted-foreground">
                  Emergency calls at night, weekends, or holidays should command premium pricing. 1.5-2x your standard rate isn't 
                  unreasonable—you're sacrificing personal time, family commitments, and often working in extreme heat or cold. 
                  Customers with no AC in July or no heat in January expect to pay more for immediate service. Don't undervalue 
                  your availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Seasonal Pricing Considerations</h3>
                <p className="text-muted-foreground">
                  Consider seasonal adjustments. Summer AC work often commands premium pricing due to high demand and working 
                  conditions (attics can reach 130°F). Winter heating emergencies are similarly urgent. Off-season installations 
                  can be discounted slightly to fill your schedule during slow months. Smart pricing based on demand maximizes 
                  your annual revenue.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Common Mistakes to Avoid
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn from these costly mistakes that trip up even experienced HVAC technicians:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Underestimating Installation Time</h3>
                <p className="text-muted-foreground">
                  The most common mistake. AC installations in cramped attics take longer than you think. Ductwork rarely fits 
                  perfectly. Electrical connections have surprises. Customers ask questions and make last-minute requests. Add 
                  20% buffer time to every estimate. You can always finish early and look like a hero. Finishing late creates 
                  complaints even if the work is perfect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Forgetting Ductwork Modifications</h3>
                <p className="text-muted-foreground">
                  New systems often don't match old duct connections. You need to modify supply plenums, adjust return air ducts, 
                  add transitions, and seal connections. These "small" modifications add hours to jobs and require materials. 
                  Always do a thorough site inspection and include ductwork modifications in your estimate. Don't assume existing 
                  ductwork will "work fine" with the new system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Not Accounting for Refrigerant Costs</h3>
                <p className="text-muted-foreground">
                  Refrigerant isn't cheap, especially R-410A and newer refrigerants. A typical residential AC system requires 
                  6-15 pounds of refrigerant. At $50-100 per pound for R-410A (and higher for newer refrigerants), that's 
                  $300-1,500 in refrigerant costs alone. Always include refrigerant as a separate line item. Don't bury it in 
                  "miscellaneous supplies" where it eats your profit margin.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Missing Permit Fees</h3>
                <p className="text-muted-foreground">
                  HVAC work requires permits in most jurisdictions. Forgetting permits is both unprofessional and illegal. 
                  It puts your license at risk, voids equipment warranties, and can create massive headaches during home sales 
                  when unpermitted work is discovered. Always check local permit requirements and include permit fees plus your 
                  time to obtain them in your estimate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Poor Communication About Scope</h3>
                <p className="text-muted-foreground">
                  Vague estimates lead to disputes. "Install new AC system - $4,500" isn't helpful. Does that include ductwork? 
                  Thermostat? Electrical disconnect? Haul-away? Customers assume it includes everything, then get upset when 
                  you charge extra. Provide specific breakdowns of what's included and what's not. Clear scope prevents 99% of 
                  customer complaints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Not Documenting Existing System Conditions</h3>
                <p className="text-muted-foreground">
                  Take photos and notes of existing systems before starting work. Document poor ductwork, incorrect sizing, 
                  code violations, electrical problems, and structural issues. This protects you when customers blame you for 
                  pre-existing problems. "Your new AC doesn't cool well" turns into "your ductwork was undersized before we 
                  started, as shown in these photos."
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
              Best Practices for Professional HVAC Estimates
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Use Professional Estimate Software</h3>
                <p className="text-muted-foreground">
                  Stop using Word documents or handwritten notes. Professional estimate software looks better, prevents 
                  calculation errors, and saves massive amounts of time. You can generate and send professional estimates in 
                  60 seconds instead of 30 minutes. Digital estimates are easier to update, track, and convert to invoices. 
                  The professional appearance alone helps you win more jobs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Detailed, Itemized Breakdowns</h3>
                <p className="text-muted-foreground">
                  Break down equipment, labor, materials, permits, and disposal costs separately. Show SEER ratings, tonnage, 
                  and brand names. Transparency builds trust and makes it easier to justify your pricing when competitors 
                  undercut you. You can explain "Their 13 SEER builder-grade unit isn't the same as this 16 SEER system with 
                  a 10-year warranty."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Include Clear Payment Terms</h3>
                <p className="text-muted-foreground">
                  Specify when payment is due. Typical terms: 50% deposit upfront for equipment ordering, remaining 50% on 
                  completion. For large jobs, use progress payments (deposit, after rough-in, after final inspection). State 
                  accepted payment methods (cash, check, card). Include late payment terms if offering financing. Clear terms 
                  prevent payment disputes and cash flow problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Set Realistic Completion Timelines</h3>
                <p className="text-muted-foreground">
                  Under-promise and over-deliver. If you think an AC installation takes 1 day, quote 1-2 days. Account for 
                  equipment delivery delays, unexpected ductwork issues, and inspection scheduling. Finishing early makes 
                  customers ecstatic. Running late creates complaints even if the work is perfect. Add buffer time to every 
                  timeline.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Professional Presentation Increases Close Rates</h3>
                <p className="text-muted-foreground">
                  Your estimate is a sales document. Use your logo, consistent formatting, proper spelling and grammar. 
                  PDF format looks more professional than handwritten estimates or Word docs. Include photos of equipment 
                  models when possible. A polished estimate suggests you do polished work. Customers often choose the contractor 
                  with the best-looking estimate, even if the price is higher.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Creating professional HVAC estimates doesn't have to be complicated or time-consuming. Focus on including all costs 
              (equipment, labor, materials, refrigerant, permits, disposal), pricing for profit, communicating clearly about 
              scope and timeline, and presenting professionally. The time you invest in better estimates pays off immediately 
              with higher close rates, fewer disputes, and better profitability. Use professional software to create estimates 
              in 60 seconds instead of 30 minutes, and you'll never go back to Word documents again.
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

export default EstimateGuide;
