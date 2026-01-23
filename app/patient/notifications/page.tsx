import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Notifications</h1>

      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          You have no new notifications
        </CardContent>
      </Card>
    </div>
  );
}
