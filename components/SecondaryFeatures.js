import clsx from "clsx";
import Image from "next/image";
import Container from "./ContainerLoading";
import screenshotContacts from "@/public/images/screenshots/contacts.png";
import screenshotInventory from "@/public/images/screenshots/inventory.png";
import screenshotProfitLoss from "@/public/images/screenshots/profit-loss.png";
import { Tab } from "@headlessui/react";
import { AddUser, ShieldDone, Heart2 } from "react-iconly";

const features = [
  {
    name: "إضافة طالب",
    summary: "Stay on top of things with always up-to-date reporting features.",
    description: "إضافة طالب في قاعدة البيانات",
    image: screenshotProfitLoss,
    icon: AddUser,
  },
  {
    name: "إضافة القسم والمستوى",
    summary:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    description: "تقسيم الطالب وفقاً لقسم والمستوى",
    image: screenshotInventory,
    icon: ShieldDone,
  },
  {
    name: "بطاقة إنصراف",
    summary:
      "Organize all of your contacts, service providers, and invoices in one place.",
    description:
      "يتم توليد بطاقة إنصراف ليستخدمها الطالب  لعملية دخول الطالب في التطبيق",
    image: screenshotContacts,
    icon: Heart2,
  },
];

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "w-[50px] h-[50px] rounded-lg flex justify-center items-center",
          isActive ? "bg-blue-700" : "bg-blue-500"
        )}
      >
        <feature.icon primaryColor="white" stroke="bold" size="medium" />
      </div>
      <h3
        className={clsx(
          "mt-6 text-2xl font-medium outline-none bolder-0 font-bolder",
          isActive ? "text-blue-700" : "text-slate-600"
        )}
      >
        {feature.name}
      </h3>
      <p className="text-md text-slate-600 font-regular">
        {feature.description}
      </p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div
      dir="rtl"
      className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
    >
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List dir="rtl" className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                    featureIndex !== selectedIndex && "opacity-60"
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}

export default function SecondaryFeatures() {
  return (
    <section dir="ltr" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-center text-3xl tracking-tight text-slate-900 sm:text-4xl font-bolder">
            🎯👌 مميزات إضافية
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 font-regular text-center">
            تم إضافة جميع المميزات التي تحتاجها لتعامل مع التطبيق بسهولة ويسر
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
