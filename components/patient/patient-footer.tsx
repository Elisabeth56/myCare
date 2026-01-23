export default function PatientFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} myCare — Patient Portal
      </div>
    </footer>
  );
}
