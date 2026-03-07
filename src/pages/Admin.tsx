import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ADMIN_PASSWORD = "trots2024";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  usePageTitle("Admin — Inquiries");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setInquiries((data as Inquiry[]) || []);
        setLoading(false);
      });
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm space-y-6"
        >
          <div className="text-center">
            <h1 className="font-serif text-3xl text-foreground mb-2">Admin</h1>
            <p className="text-sm text-muted-foreground">Enter password to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-transparent border-border text-foreground"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 text-[10px] uppercase tracking-[0.4em] text-foreground border border-border hover:bg-accent transition-colors"
            >
              Enter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">Inquiries</h1>
            <p className="text-sm text-muted-foreground mt-1">{inquiries.length} total</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : inquiries.length === 0 ? (
          <p className="text-muted-foreground">No inquiries yet.</p>
        ) : (
          <div className="border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Date</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Name</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id} className="border-border">
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(inquiry.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="text-sm text-foreground font-medium">{inquiry.name}</TableCell>
                    <TableCell>
                      <a href={`mailto:${inquiry.email}`} className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                        {inquiry.email}
                      </a>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-md">{inquiry.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
