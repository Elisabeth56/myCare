import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LabsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Lab Results</h1>

      <Card>
        <CardHeader>
          <CardTitle>Recent Labs</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          No lab results yet
        </CardContent>
      </Card>
    </div>
  );
}
