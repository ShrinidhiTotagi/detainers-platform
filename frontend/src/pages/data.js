// data.js
export const serviceData = {
  1: {
    name: "Home Maintenance",
    desc: "Professional maintenance services including plumbing, electrical, and painting.",
    providers: [
      {
        id: 1,
        name: "Rajesh Kumar",
        location: "Bangalore",
        cost: "₹500 - ₹1200",
        rating: 4.8,
        completed: 245,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        details: {
          startingPrice: "₹199",
          packages: [
            { type: "1 switch", rating: 4.82, reviews: "15K", price: "₹99" },
            { type: "2 switches", rating: 4.83, reviews: "6K", price: "₹149" },
            { type: "More than 2 switches", rating: 4.81, reviews: "11K", price: "₹179" },
            { type: "AC switchboard", rating: 4.82, reviews: "2K", price: "₹249" },
          ],
          process: [
            "Inspection: We inspect your switchboard & share a repair quote for approval",
            "Quote approval: You can approve the quote to proceed, or pay a visitation charge if declined",
            "Repair & spare parts: If needed, we will source spare parts from the local market",
            "Replacement, if needed: If repair is not possible, we will replace the switchboard",
            "Warranty activation: The service is covered by a 30-day warranty for any issues after repair",
          ],
          reviews: [
            { user: "Akshita Arora", date: "Oct 12, 2025", rating: 5, comment: "The professional worked patiently and reworked things to suit our preference. Highly recommend!" },
            { user: "Aniruddha Chatterjee", date: "Oct 12, 2025", rating: 5, comment: "Great service. Identified the issue instantly and helped procure spare parts at a cheaper price!" },
          ],
        },
      },
      {
        id: 2,
        name: "Sneha Patil",
        location: "Pune",
        cost: "₹600 - ₹1500",
        rating: 4.6,
        completed: 198,
        verified: true,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        details: {
          startingPrice: "₹249",
          packages: [
            { type: "1 switch", rating: 4.8, reviews: "10K", price: "₹119" },
            { type: "2 switches", rating: 4.79, reviews: "5K", price: "₹159" },
          ],
          process: [
            "Inspection: Checked wiring & switches",
            "Quote approval: Client approved",
            "Repair: Replaced faulty wiring",
            "Warranty activation: 30 days post service",
          ],
          reviews: [
            { user: "Deepa", date: "Oct 13, 2025", rating: 5, comment: "Very polite and professional!" },
            { user: "Ankit", date: "Oct 13, 2025", rating: 5, comment: "Explained every step clearly." },
          ],
        },
      },
    ],
  },
};
