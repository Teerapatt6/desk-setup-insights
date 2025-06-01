
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Input validation
    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call - replace with actual implementation when backend is ready
      setTimeout(() => {
        localStorage.setItem("authToken", "demo-token");
        localStorage.setItem("userRole", "user");
        localStorage.setItem("userName", "Demo User");
        localStorage.setItem("isLoggedIn", "true");
        
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        
        navigate("/");
        setIsLoading(false);
      }, 1000);
    } catch (error: unknown) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-orange-400 rounded-full opacity-10 animate-pulse delay-500"></div>
      
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-1 pb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your SetDesk account
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="••••••••"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors"
              >
                Create one here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
