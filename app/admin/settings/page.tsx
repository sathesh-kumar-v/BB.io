"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save, Upload } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState("BrandingBeez.io")
  const [email, setEmail] = useState("contact@brandingbeez.io")
  const [phone, setPhone] = useState("+1 234 567 8900")
  const [address, setAddress] = useState("123 Business St, City, State 12345")
  const [description, setDescription] = useState("AI-powered development agency")

  const [mailchimpEnabled, setMailchimpEnabled] = useState(false)
  const [mailchimpApiKey, setMailchimpApiKey] = useState("")
  const [calendlyEnabled, setCalendlyEnabled] = useState(false)
  const [calendlyUrl, setCalendlyUrl] = useState("")
  const [stripeEnabled, setStripeEnabled] = useState(false)
  const [stripeApiKey, setStripeApiKey] = useState("")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your site configuration and integrations</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="mt-6">
          <Card className="p-6 border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Company Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="mt-6 space-y-6">
          {/* Mailchimp */}
          <Card className="p-6 border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Mailchimp</h3>
                <p className="text-sm text-muted-foreground">Connect your Mailchimp account for email marketing</p>
              </div>
              <Switch checked={mailchimpEnabled} onCheckedChange={setMailchimpEnabled} />
            </div>
            {mailchimpEnabled && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mailchimpApiKey">API Key</Label>
                  <Input
                    id="mailchimpApiKey"
                    type="password"
                    placeholder="Enter your Mailchimp API key"
                    value={mailchimpApiKey}
                    onChange={(e) => setMailchimpApiKey(e.target.value)}
                  />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Mailchimp Settings
                </Button>
              </div>
            )}
          </Card>

          {/* Calendly */}
          <Card className="p-6 border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Calendly</h3>
                <p className="text-sm text-muted-foreground">Integrate Calendly for appointment scheduling</p>
              </div>
              <Switch checked={calendlyEnabled} onCheckedChange={setCalendlyEnabled} />
            </div>
            {calendlyEnabled && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="calendlyUrl">Calendly URL</Label>
                  <Input
                    id="calendlyUrl"
                    placeholder="https://calendly.com/your-username"
                    value={calendlyUrl}
                    onChange={(e) => setCalendlyUrl(e.target.value)}
                  />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Calendly Settings
                </Button>
              </div>
            )}
          </Card>

          {/* Stripe */}
          <Card className="p-6 border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Stripe</h3>
                <p className="text-sm text-muted-foreground">Connect Stripe for payment processing</p>
              </div>
              <Switch checked={stripeEnabled} onCheckedChange={setStripeEnabled} />
            </div>
            {stripeEnabled && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="stripeApiKey">API Key</Label>
                  <Input
                    id="stripeApiKey"
                    type="password"
                    placeholder="Enter your Stripe API key"
                    value={stripeApiKey}
                    onChange={(e) => setStripeApiKey(e.target.value)}
                  />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Stripe Settings
                </Button>
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Branding */}
        <TabsContent value="branding" className="mt-6">
          <Card className="p-6 border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Brand Assets</h3>
            <div className="space-y-6">
              {/* Logo */}
              <div>
                <Label className="text-foreground">Company Logo</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG up to 2MB</p>
                </div>
              </div>

              {/* Favicon */}
              <div>
                <Label className="text-foreground">Favicon</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">ICO, PNG up to 1MB</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Branding
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
