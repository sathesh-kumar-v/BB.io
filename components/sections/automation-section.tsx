import { Sparkles, Zap, Link2 } from "lucide-react"

export function AutomationSection() {
  return (
    <section className="relative py-24 bg-background scroll-fade-in">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Automate Your Business Processes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Custom web and mobile applications powered by AI that eliminate manual work, reduce errors, and scale with
            your business.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Process Automation Through Web & Mobile Apps
          </h3>
          <p className="text-muted-foreground text-center text-pretty max-w-3xl mx-auto">
            We build intelligent applications that transform how your business operates. From client intake to document
            processing, our custom solutions automate repetitive tasks, integrate seamlessly with your existing systems,
            and provide real-time insights—all accessible from any device.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Custom Development */}
          <div className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Custom Development</h4>
              <p className="text-muted-foreground text-pretty">
                Tailored web and mobile apps built specifically for your industry workflows and requirements
              </p>
            </div>
          </div>

          {/* AI-Powered Automation */}
          <div className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">AI-Powered Automation</h4>
              <p className="text-muted-foreground text-pretty">
                Intelligent systems that handle data entry, document analysis, scheduling, and client communication
              </p>
            </div>
          </div>

          {/* Seamless Integration */}
          <div className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Seamless Integration</h4>
              <p className="text-muted-foreground text-pretty">
                Connect with your existing tools and databases for a unified, efficient workflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
