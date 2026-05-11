"use client";

import React, { useState } from 'react';
import { generateProductMarketingContent, type GenerateProductMarketingContentOutput } from '@/ai/flows/generate-product-marketing-content-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Copy, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AIContentAssistant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateProductMarketingContentOutput | null>(null);
  const { toast } = useToast();

  async function handleGenerate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productName = formData.get('productName') as string;
    const productDescription = formData.get('productDescription') as string;

    if (!productName || !productDescription) return;

    setLoading(true);
    try {
      const output = await generateProductMarketingContent({
        productName,
        productDescription,
        targetAudience: "Enterprise IT Decision Makers",
      });
      setResult(output);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "An error occurred while generating content. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard!",
    });
  };

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Marketing Copilot</h2>
              <p className="text-muted-foreground">AI-powered enterprise SEO and copy generation.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card border-border h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Input Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerate} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Product Name</label>
                    <Input name="productName" placeholder="e.g. all9s CloudMesh" className="bg-background" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Core Capabilities</label>
                    <Textarea 
                      name="productDescription" 
                      placeholder="Describe the value proposition for enterprise clients..." 
                      className="bg-background min-h-[150px]" 
                      required 
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 font-bold h-12">
                    {loading ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
                    ) : (
                      "Generate Optimized Copy"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {!result && !loading && (
                <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-border rounded-3xl p-12 text-center text-muted-foreground">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p>Input your product details on the left to generate enterprise-grade marketing content.</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4 animate-pulse">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-secondary/50 rounded-2xl" />
                  ))}
                </div>
              )}

              {result && (
                <>
                  <Card className="bg-card border-border">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Meta Description</CardTitle>
                      <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.metaDescription)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">&ldquo;{result.metaDescription}&rdquo;</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">SEO Keywords</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {result.seoKeywords.map((kw, i) => (
                        <div key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold border border-primary/20">
                          {kw}
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Landing Page Copy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {result.copySuggestions.map((copy, i) => (
                        <div key={i} className="p-4 bg-secondary/30 rounded-xl relative group">
                          <p className="text-sm leading-relaxed pr-8">{copy}</p>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => copyToClipboard(copy)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}