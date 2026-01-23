import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-xl font-semibold">Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label>Name</Label>
            <Input placeholder="John Doe" />
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Input type="email" placeholder="john@example.com" />
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
