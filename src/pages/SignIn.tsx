import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-hero bg-fixed -z-10"></div>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 px-6 py-20">
        <div className="max-w-md mx-auto">
          <Card className="glass-morphism border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to your eleVique account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="glass-morphism border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    className="glass-morphism border-primary/20"
                  />
                </div>
              </div>

              <Button className="w-full bg-gradient-button hover:opacity-90">
                Sign In
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-primary">
                  Forgot your password?
                </Button>
              </div>

              <Separator className="bg-border" />

              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 text-primary hover:bg-primary/10"
                >
                  Create Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SignIn;