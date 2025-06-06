"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";

export default function SignUpForm() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignUp.Step name="start">
                <div className="w-full sm:w-96 flex flex-col gap-y-4 ">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold font-lora">
                      Create your free account
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Connect with your favorite social auth
                    </p>
                  </div>
                  <div className="grid gap-y-4">
                    <div className="grid grid-cols-2 gap-x-4">
                      <Clerk.Connection name="github" asChild>
                        <Button
                          size="sm"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:github">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.GitHub className="mr-2 size-4" />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name="google" asChild>
                        <Button
                          size="sm"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.Google className="mr-2 size-4" />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                    <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border font-lora">
                      or continue with email
                    </p>
                    <Clerk.Field name="emailAddress" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="font-lora">Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input
                          className="bg-muted/50 outline-none"
                          placeholder="example@email.com"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="font-lora">Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" required asChild>
                        <Input
                          className="bg-muted/50 outline-none"
                          placeholder="********"
                        />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </div>
                  <div>
                    <div className="grid w-full gap-y-4">
                      <SignUp.Captcha className="empty:hidden" />
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                "Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignUp.Action>

                      <Clerk.Link
                        navigate="sign-in"
                        className="text-start group"
                      >
                        Not new to Notpadd?{" "}
                        <span className="text-blue-500  group-hover:underline font-lora">
                          Sign in
                        </span>
                      </Clerk.Link>
                    </div>
                  </div>
                </div>
              </SignUp.Step>

              <SignUp.Step name="continue">
                <div className="w-full sm:w-96 flex flex-col gap-y-4 ">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold font-lora">
                      Continue registration
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Create a username to continue
                    </p>
                  </div>
                  <div className="grid gap-y-4">
                    <Clerk.Field name="username" className="space-y-2">
                      <Clerk.Label>
                        <Label className="font-lora">Username</Label>
                      </Clerk.Label>
                      <Clerk.Input type="text" required asChild>
                        <Input className="bg-muted/50 outline-none" />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </div>
                  <div className="grid w-full gap-y-4">
                    <SignUp.Action submit asChild>
                      <Button disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? (
                              <Icons.Loading className="size-4 animate-spin" />
                            ) : (
                              "Continue"
                            );
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignUp.Action>
                  </div>
                  Create a new team
                </div>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <div className="w-full sm:w-96 flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                      <h2 className="text-2xl font-bold font-lora">
                        Verify your email
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Use the verification link sent to your email address
                      </p>
                    </div>
                    <div className="grid gap-y-4">
                      <div className="grid items-center justify-center gap-y-2">
                        <Clerk.Field name="code" className="space-y-2">
                          <Clerk.Label className="sr-only">
                            Email address
                          </Clerk.Label>
                          <div className="flex justify-center text-center">
                            <Clerk.Input
                              type="otp"
                              className="flex justify-center has-[:disabled]:opacity-50"
                              autoSubmit
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className={cn(
                                      "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                      {
                                        "z-10 ring-2 ring-ring ring-offset-background":
                                          status === "cursor" ||
                                          status === "selected",
                                      }
                                    )}
                                  >
                                    {value}
                                    {status === "cursor" && (
                                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                      </div>
                                    )}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className="block text-center text-sm text-destructive" />
                        </Clerk.Field>
                        <SignUp.Action
                          asChild
                          resend
                          className="text-muted-foreground"
                          fallback={({ resendableAfter }) => (
                            <Button variant="link" size="sm" disabled>
                              Didn&apos;t receive a code? Resend (
                              <span className="tabular-nums">
                                {resendableAfter}
                              </span>
                              )
                            </Button>
                          )}
                        >
                          <Button type="button" variant="link" size="sm">
                            Didn&apos;t receive a code? Resend
                          </Button>
                        </SignUp.Action>
                      </div>
                    </div>
                    <div>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Icons.Loading className="size-4 animate-spin" />
                                ) : (
                                  "Continue"
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignUp.Action>
                      </div>
                    </div>
                  </div>
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  );
}
