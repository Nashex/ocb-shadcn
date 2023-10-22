"use client";
// Use client because we are using some input components

import React from "react";

// ShadCn Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

export default function ShadCNDemo({}: Props) {
  return (
    <section className="p-4 max-w-5xl w-full flex flex-col">
      <div>
        <h2 className="text-xl mb-2 font-medium">ShadCn Components</h2>
        <p>
          These should change color but should not change sizing and spacing
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4 flex-wrap flex-col sm:flex-row items-stretch">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the
                  cli.
                </AlertDescription>
              </Alert>

              <Alert className="ocb">
                <Terminal className="h-[1em] w-[1em]" /> { /* Potentially add h and w styles? */}
                <AlertTitle className="text-sm">OCB Styled Alert</AlertTitle>
                <AlertDescription>
                  Look at the classname on the parent element.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                </CardHeader>
                <CardContent className="gap-4 flex flex-col">
                  <Label htmlFor="email">Label component</Label>
                  <Input placeholder="Input component" />

                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card className="ocb">
                <CardHeader>
                  <CardTitle>OCB Styled Card</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>

              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
              </Tabs>

              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
