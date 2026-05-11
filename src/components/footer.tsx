import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">all9s <span className="text-primary">Solutions</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Leading the industry in hyper-reliable enterprise solutions. Our mission is to provide 99.9999999% uptime for global infrastructure.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors text-foreground/70 hover:text-foreground">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors text-foreground/70 hover:text-foreground">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors text-foreground/70 hover:text-foreground">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Products</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">QuantumCore</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">AuraLink Mesh</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">ZenithOps AI</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Vortex Database</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">System Status</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} all9s Solutions LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}