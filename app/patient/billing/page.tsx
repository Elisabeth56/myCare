import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Billing</h1>

      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          No outstanding bills
        </CardContent>
      </Card>
    </div>
  );
}
