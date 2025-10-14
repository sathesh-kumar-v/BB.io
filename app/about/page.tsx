import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Users, Globe, Award, TrendingUp, Heart } from "lucide-react"

export default function AboutPage() {
  const regionalPartners = [
    {
      name: "Ken Mitchell",
      title: "Business Partner - United States",
      location: "Nationwide USA Coverage",
      role: "Ken represents BrandingBeez.io across the United States, connecting with local businesses and forums to bring AI automation solutions to American SMBs.",
      expertise: [
        "US market AI adoption strategies",
        "Local business development and networking",
        "SMB outreach and community engagement",
        "Regional compliance and business practices",
      ],
      contact: "Reach Ken for US-based projects and consultations",
    },
    {
      name: "Matt Rodriguez",
      title: "Business Partner - Miami/Southeast",
      location: "Miami, Florida & Southeast Region",
      role: "Matt focuses on the vibrant Miami business ecosystem and Southeast markets, specializing in connecting with local entrepreneurs and established businesses.",
      expertise: [
        "Southeast US market penetration",
        "Miami startup and SMB ecosystem",
        "Local networking and business development",
        "Regional market insights and opportunities",
      ],
      contact: "Connect with Matt for Southeast US projects",
    },
    {
      name: "Philip Weber",
      title: "Business Partner - Germany/Europe",
      location: "Germany & European Markets",
      role: "Philip brings BrandingBeez.io's AI solutions to German and European businesses, navigating GDPR compliance and regional business practices.",
      expertise: [
        "European market AI regulations (GDPR compliance)",
        "German business culture and practices",
        "EU-wide business development",
        "Multi-language project coordination",
      ],
      contact: "Contact Philip for European projects and consultations",
    },
  ]

  const leadership = [
    {
      name: "Vignesh",
      title: "Founder & Visionary",
      background:
        "The driving force behind BrandingBeez.io's mission to make AI accessible to SMBs. Combines business acumen with technical vision to deliver solutions that actually solve real problems.",
      focus: [
        "Company vision and strategic direction",
        "Client success and satisfaction oversight",
        "Innovation and technology roadmap",
        "Business development and partnerships",
      ],
      philosophy:
        "AI should solve business problems, not create technology problems. Every solution we build starts with understanding the real challenge, not showcasing our technical capabilities.",
    },
    {
      name: "Raje",
      title: "Chief Executive Officer",
      background:
        "Leads day-to-day operations and ensures every project delivers measurable business value. Expert in scaling AI solutions and managing complex client relationships.",
      focus: [
        "Operations management and delivery excellence",
        "Client relationship management",
        "Team leadership and development",
        "Business growth and expansion",
      ],
      philosophy:
        "Results speak louder than promises. We measure our success by our clients' success, and every project must deliver clear ROI.",
    },
    {
      name: "Charan",
      title: "Chief Visionary Officer",
      background:
        "Bridges the gap between cutting-edge AI capabilities and practical business applications. Ensures our solutions stay ahead of technology trends while remaining grounded in business reality.",
      focus: [
        "Technology innovation and advancement",
        "AI capability development and integration",
        "Future-proofing client solutions",
        "Industry trend analysis and application",
      ],
      philosophy:
        "We don't just implement today's AI - we build foundations that adapt and grow with tomorrow's innovations.",
    },
  ]

  type CoreTeamMember = {
    name: string
    title: string
    specialization: string
    expertise: string
    projects: string
    image?: string
  }

  const coreTeam: CoreTeamMember[] = [
    {
      name: "Mathavan",
      title: "AI Developer",
      specialization: "Machine Learning & AI Integration Expert",
      expertise: "GPT-4 integration, custom ML models, intelligent automation systems",
      projects: "Lead developer on Octupus.ai and Wellenpuls AI coaching systems",
      image: "/Mathavan_Stroke.png",
    },
    {
      name: "Logu",
      title: "Full-Stack Developer",
      specialization: "End-to-End Application Development",
      expertise: "React, Node.js, database design, API integration",
      projects: "AC Graphics CRM architecture and mobile app development",
    },
    {
      name: "Vishnu",
      title: "WordPress Developer",
      specialization: "WordPress & CMS Integration Expert",
      expertise: "Custom WordPress development, plugin creation, CMS optimization",
      projects: "WordPress AI integration and content management solutions",
    },
    {
      name: "Yuva",
      title: "SEO Expert",
      specialization: "Digital Visibility & Search Optimization",
      expertise: "Technical SEO, content optimization, AI-powered SEO strategies",
      projects: "Client digital presence optimization and search performance",
    },
    {
      name: "Gopal",
      title: "Ads Expert",
      specialization: "Digital Marketing & Advertising Strategy",
      expertise: "Paid advertising, conversion optimization, marketing automation",
      projects: "Client acquisition campaigns and ROI optimization",
    },
    {
      name: "Sathesh",
      title: "Full-Stack Developer",
      specialization: "Full-Stack Application Architecture",
      expertise: "Modern web development, database optimization, system integration",
      projects: "Complex business system integrations and custom applications",
      image: "/Sathish_Stroke.png",
    },
    {
      name: "Azeez",
      title: "UI/UX Designer",
      specialization: "User Experience & Interface Design",
      expertise: "Mobile app design, web interfaces, user journey optimization",
      projects: "Wellenpuls app design and client interface development",
      image: "/Azeez_Stroke.png",
    },
    {
      name: "Priya",
      title: "Automation Expert",
      specialization: "Business Process Automation",
      expertise: "Workflow optimization, process automation, system integration",
      projects: "Client process analysis and automation implementation",
    },
    {
      name: "Athira",
      title: "Human Resources Manager",
      specialization: "Team Development & Client Relations",
      expertise: "Team coordination, client communication, project management",
      projects: "Team optimization and client success management",
    },
    {
      name: "Satheesh",
      title: "Full-Stack Developer",
      specialization: "Advanced Web Development",
      expertise: "Complex system development, API design, performance optimization",
      projects: "Enterprise-level integrations and scalable solutions",
    },
    {
      name: "Niju",
      title: "WordPress Developer",
      specialization: "WordPress Solutions & Integration",
      expertise: "Custom WordPress development, plugin architecture, CMS optimization",
      projects: "WordPress-based business solutions and integrations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Story */}
            <div>
              <h1 className="font-bold text-4xl lg:text-5xl text-balance mb-6">
                We Build AI That Actually Works for Your Business
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded by Vignesh and led by CEO Raje, our global team has delivered 200+ automation projects that
                drive measurable results. From our headquarters to regional partners worldwide, we create AI solutions
                that make work smarter, not harder.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Founder Story from Vignesh</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    "Three years ago, I was running a business drowning in manual processes. Every AI company wanted to
                    sell me a $100K 'digital transformation.' I just wanted my team to stop spending 20 hours a week on
                    data entry.
                  </p>
                  <p>
                    That's when I realized: the AI industry was building for other AI companies, not for real businesses
                    with real problems. So I started BrandingBeez.io to build solutions that actually work for people
                    like us."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Leadership Photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/20 to-primary/5">
                <img
                  src="/professional-business-team-photo-with-three-leader.jpg"
                  alt="Leadership Team: Vignesh, Raje, and Charan"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Our leadership team: Vignesh (Founder), Raje (CEO), and Charan (CVO)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Globe size={16} />
              Global Team, Local Expertise
            </div>
            <h2 className="font-bold text-3xl lg:text-4xl text-balance mb-4">
              Our business partners represent BrandingBeez.io in key markets worldwide
            </h2>
          </div>

          {/* Regional Partners Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {regionalPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={`/professional-business-partner-headshot-.jpg?height=400&width=400&query=professional business partner headshot ${partner.name}`}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">{partner.name}</h3>
                <p className="text-primary font-medium mb-2">{partner.title}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin size={14} />
                  {partner.location}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{partner.role}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold">Expertise:</p>
                  <ul className="space-y-1">
                    {partner.expertise.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-primary font-medium">{partner.contact}</p>
              </div>
            ))}
          </div>

          {/* Global Partnership Benefits */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-bold text-xl mb-6 text-center">Global Partnership Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, text: "24/7 Coverage: Time zone coverage across US, Europe, and Asia" },
                { icon: MapPin, text: "Local Expertise: Regional partners understand local business practices" },
                { icon: Award, text: "Global Standards: Consistent technical quality from core development team" },
                { icon: Users, text: "Cultural Fit: Solutions adapted to regional business cultures" },
                { icon: TrendingUp, text: "Compliance: Regional expertise in local regulations (GDPR, HIPAA, etc.)" },
                { icon: Heart, text: "Local networking and business community access" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={20} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Core Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance mb-4">
              Meet Our Leadership & Core Development Team
            </h2>
            <p className="text-lg text-muted-foreground">The experts behind your AI automation success</p>
          </div>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={`/executive-headshot.png?height=400&width=400&query=professional executive headshot ${leader.name}`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-2xl mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{leader.background}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold">Focus:</p>
                  <ul className="space-y-1">
                    {leader.focus.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">"{leader.philosophy}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Development Team */}
          <div className="mb-12">
            <h3 className="font-bold text-2xl mb-8 text-center">Core Development Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-primary/5">
                    <img
                      src={
                        member.image ??
                        `/professional-developer-headshot-.jpg?height=300&width=300&query=professional developer headshot ${member.name}`
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-2">{member.title}</p>
                  <p className="text-sm font-semibold mb-1">{member.specialization}</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="font-semibold">Expertise:</span> {member.expertise}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Projects:</span> {member.projects}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Strength Overview */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="font-bold text-xl mb-6 text-center">Team Strength Overview</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "3 Leadership Visionaries setting strategy and direction",
                "6 Full-Stack Developers building complete solutions",
                "1 AI Specialist creating intelligent automation",
                "1 Designer crafting exceptional user experiences",
                "2 Marketing Experts driving growth and visibility",
                "2 WordPress Specialists for CMS solutions",
                "1 HR Manager ensuring team and client success",
              ].map((strength, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary text-xl">🔥</span>
                  <p className="text-sm">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Collaboration Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance mb-4">
              How Our Global Team Delivers Local Results
            </h2>
            <p className="text-lg text-muted-foreground">Coordinated expertise across time zones and regions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-bold text-xl mb-4">Development Hub</h3>
              <p className="text-muted-foreground">
                Our core development team works from our headquarters, ensuring consistent quality and technical
                standards across all projects.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-bold text-xl mb-4">Regional Representation</h3>
              <p className="text-muted-foreground">
                Business partners in key markets provide local insights, cultural understanding, and regional business
                development.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xl mb-6">Client Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "24/7 Coverage",
                  description: "Time zone coverage across US, Europe, and Asia",
                },
                {
                  title: "Local Expertise",
                  description: "Regional partners understand local business practices",
                },
                {
                  title: "Global Standards",
                  description: "Consistent technical quality from core development team",
                },
                {
                  title: "Cultural Fit",
                  description: "Solutions adapted to regional business cultures",
                },
                {
                  title: "Compliance",
                  description: "Regional expertise in local regulations (GDPR, HIPAA, etc.)",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{benefit.title}</p>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-bold text-xl mb-6">Project Coordination</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Daily standups across time zones",
                "Regional partner involvement in local projects",
                "Centralized quality assurance and testing",
                "Global knowledge sharing and best practices",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance mb-4">
              The Global Impact We're Creating Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🌍", label: "Global Reach", value: "200+ projects across 3 continents" },
              { icon: "👥", label: "Team Strength", value: "14 core experts + 3 regional partners" },
              { icon: "🏢", label: "Industries Served", value: "47 different business sectors" },
              { icon: "💰", label: "Value Created", value: "$2.1M+ in measured client ROI" },
              { icon: "⭐", label: "Satisfaction", value: "94% client retention and expansion rate" },
              { icon: "🚀", label: "Growth", value: "300% year-over-year expansion" },
            ].map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <p className="font-bold text-xl">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="font-bold text-xl mb-6 text-center">Regional Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { region: "USA", projects: "120+ successful implementations" },
                { region: "Europe", projects: "45+ projects with GDPR compliance" },
                { region: "Asia-Pacific", projects: "35+ regional business solutions" },
              ].map((region, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-2xl text-primary mb-2">{region.region}</p>
                  <p className="text-sm text-muted-foreground">{region.projects}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl lg:text-4xl text-balance mb-4">Connect with BrandingBeez.io Worldwide</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Reach out to our headquarters or connect with regional partners
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <h3 className="font-bold text-xl mb-4">Headquarters</h3>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-semibold">Email:</span> hello@brandingbeez.io
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Primary Contact:</span> Vignesh (Founder)
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Development Team:</span> Direct access to core team
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <h3 className="font-bold text-xl mb-4">Regional Partners</h3>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-semibold">USA Projects:</span> Contact Ken for US market expertise
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Miami/Southeast:</span> Reach Matt for regional opportunities
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Germany/Europe:</span> Connect with Philip for EU projects
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="font-bold text-xl mb-6">Engagement Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Strategic Consultation: Book with leadership team",
                "Technical Discussion: Connect with development specialists",
                "Regional Projects: Reach out to local business partners",
                "Community Access: Join our global business owner community",
              ].map((option, index) => (
                <div key={index} className="flex items-start gap-2 text-left">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-sm">{option}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
