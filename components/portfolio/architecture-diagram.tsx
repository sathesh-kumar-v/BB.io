export function ArchitectureDiagram() {
  return (
    <div className="bg-background border border-border rounded-lg p-8 overflow-x-auto">
      <div className="flex items-center justify-between min-w-[800px] gap-4">
        {/* User Input */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">User Input</div>
            <div className="text-xs text-muted-foreground mt-1">Topic & Brief</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-0.5 bg-border relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-y-4 border-y-transparent" />
        </div>

        {/* GPT-4 Processing */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">GPT-4</div>
            <div className="text-xs text-muted-foreground mt-1">AI Processing</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-0.5 bg-border relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-y-4 border-y-transparent" />
        </div>

        {/* Brand Voice Filter */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">Brand Voice</div>
            <div className="text-xs text-muted-foreground mt-1">Matching</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-0.5 bg-border relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-y-4 border-y-transparent" />
        </div>

        {/* Compliance Check */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">Compliance</div>
            <div className="text-xs text-muted-foreground mt-1">OFCOM Check</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-0.5 bg-border relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-y-4 border-y-transparent" />
        </div>

        {/* Platform APIs */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">Platform APIs</div>
            <div className="text-xs text-muted-foreground mt-1">Multi-Channel</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-0.5 bg-border relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-border border-y-4 border-y-transparent" />
        </div>

        {/* Publishing */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-32 text-center">
            <div className="font-semibold text-sm">Publishing</div>
            <div className="text-xs text-muted-foreground mt-1">Scheduled</div>
          </div>
        </div>
      </div>
    </div>
  )
}
