import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

/* SHADCN FORM IMPORTS */
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DropUsLineForm = () => {
  const form = useForm({
    defaultValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-full relative overflow-hidden py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* MAKE BOTH COLUMNS SAME HEIGHT */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-full flex flex-col"
          >
            <div
              className="bg-linear-to-br from-[#052716]/90 to-[#031A10]/90 backdrop-blur-xl
              border border-[#4FAF4F]/20 rounded-3xl p-8 shadow-2xl
              relative overflow-hidden h-full flex flex-col"
            >
              <div className="relative z-10 grow flex flex-col">

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 grow flex flex-col">

                    {/* NAME */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Full Name"
                              className="bg-[#031A10] border border-[#4FAF4F]/20 rounded-2xl px-12 py-4
                              text-white placeholder-[#7FB88E]/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* EMAIL */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your Email Address"
                              className="bg-[#031A10] border border-[#4FAF4F]/20 rounded-2xl px-12 py-4
                              text-white placeholder-[#7FB88E]/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* PHONE */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your Phone Number"
                              className="bg-[#031A10] border border-[#4FAF4F]/20 rounded-2xl px-12 py-4
                              text-white placeholder-[#7FB88E]/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* SUBJECT */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Subject"
                              className="bg-[#031A10] border border-[#4FAF4F]/20 rounded-2xl px-12 py-4
                              text-white placeholder-[#7FB88E]/60"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* MESSAGE */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Your Message"
                              className="bg-[#031A10] border border-[#4FAF4F]/20 rounded-2xl px-12 py-4
                              text-white placeholder-[#7FB88E]/60 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3
                      bg-linear-to-r from-[#4FAF4F] to-[#3A9D3A]
                      px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                      hover:scale-[1.02]"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span className="text-white font-semibold text-base">Send Message</span>
                    </button>

                  </form>
                </Form>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE MAP + INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-full flex flex-col"
          >
            <div
              className="bg-[#031A10]/40 border border-[#4FAF4F]/20 rounded-3xl
              overflow-hidden shadow-xl backdrop-blur-xl h-full flex flex-col"
            >

              {/* MAP */}
              <div className="w-full h-[350px] lg:h-[55%]">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.091459387501!2d80.9422373!3d26.8613199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d8c0340811%3A0x596f8f66269983c!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v170593209"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-t-3xl"
                ></iframe>
              </div>

              {/* CONTACT INFO */}
              <div className="p-6 grow flex flex-col">
                <h2 className="text-white text-2xl font-semibold">Our Location</h2>

                <p className="text-[#9EC7A9] leading-relaxed mt-2">
                  Visit our office anytime or contact us through the details below.
                </p>

                <div className="text-[#7FB88E] mt-4 space-y-1">
                  <p>
                    <strong className="text-white">📍 Address:</strong> Lucknow, Uttar Pradesh
                  </p>
                  <p>
                    <strong className="text-white">📞 Phone:</strong> +91 9876543210
                  </p>
                  <p>
                    <strong className="text-white">✉️ Email:</strong> support@nagarvan.org
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DropUsLineForm;
