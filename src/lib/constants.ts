export const COUNTRIES = [
  { code: "KE", name: "Kenya", prefix: "+254", flag: "\u{1F1F0}\u{1F1EA}", rateCents: 5 },
  { code: "UG", name: "Uganda", prefix: "+256", flag: "\u{1F1FA}\u{1F1EC}", rateCents: 5 },
  { code: "TZ", name: "Tanzania", prefix: "+255", flag: "\u{1F1F9}\u{1F1FF}", rateCents: 5 },
  { code: "NG", name: "Nigeria", prefix: "+234", flag: "\u{1F1F3}\u{1F1EC}", rateCents: 4 },
  { code: "ZA", name: "South Africa", prefix: "+27", flag: "\u{1F1FF}\u{1F1E6}", rateCents: 4 },
  { code: "GH", name: "Ghana", prefix: "+233", flag: "\u{1F1EC}\u{1F1ED}", rateCents: 5 },
  { code: "RW", name: "Rwanda", prefix: "+250", flag: "\u{1F1F7}\u{1F1FC}", rateCents: 7 },
  { code: "SS", name: "South Sudan", prefix: "+211", flag: "\u{1F1F8}\u{1F1F8}", rateCents: 12 },
];

export const PRICING = {
  monthly: { price: 20, period: "month", label: "Monthly" },
  annual: { price: 180, pricePerMonth: 15, period: "year", label: "Annual", savings: 60 },
};

export const COMPANY = {
  name: "AssisConnect",
  legal: "Assis Tech Ltd",
  country: "United Kingdom",
  domain: "assisconnect.net",
  product: "Piga Home",
};
