import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrescriptionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Prescriptions</h1>

      <Card>
        <CardHeader>
          <CardTitle>Active Prescriptions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          No prescriptions available
        </CardContent>
      </Card>
    </div>
  );
}
