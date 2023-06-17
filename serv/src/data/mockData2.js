export const mockDataAssets = [
    {
      id: 1,
      name: "1962 Ferrari 250 GTO",
      category: "Classic Cars",
      purchaseDate: "June 15, 2000",
      purchasePrice: "$7,000,000",
      currentValue: "$70,000,000",
      lastMaintenance: "June 12, 2023",
      insuranceProvider: "Luxury Auto Insure",
      policyExpiry: "June 15, 2024",
    },
    {
      id: 2,
      name: "Rolex Daytona 6239",
      category: "Luxury Watches",
      purchaseDate: "January 20, 2018",
      purchasePrice: "$95,000",
      currentValue: "$125,000",
      lastMaintenance: "December 30, 2022",
      insuranceProvider: "Lux Watches Insure",
      policyExpiry: "January 30, 2024",
    },
    {
      id: 3,
      name: "Pablo Picasso - Les femmes d'Alger",
      category: "Art",
      purchaseDate: "May 11, 2015",
      purchasePrice: "$179,365,000",
      currentValue: "$200,000,000",
      lastMaintenance: "May 12, 2023",
      insuranceProvider: "Fine Art Secure",
      policyExpiry: "May 11, 2024",
    },
    //...Additional Assets
  ];
  

  export const mockDataAssetContacts = [
    {
      id: 1,
      assetName: "1962 Ferrari 250 GTO",
      dealerEmail: "ferrari_dealer@gmail.com",
      purchaseLocation: "Berlin, Germany",
      appraisalContact: "(665)121-5454",
      maintenanceContact: "AutoCare, Berlin, +49 30 303030",
    },
    {
      id: 2,
      assetName: "Rolex Daytona 6239",
      dealerEmail: "rolex_dealer@gmail.com",
      purchaseLocation: "Zurich, Switzerland",
      appraisalContact: "(421)314-2288",
      maintenanceContact: "Timeless, Zurich, +41 44 211 48 15",
    },
    {
      id: 3,
      assetName: "Pablo Picasso - Les femmes d'Alger",
      dealerEmail: "art_dealer@gmail.com",
      purchaseLocation: "New York, USA",
      appraisalContact: "(422)982-6739",
      maintenanceContact: "ArtCare, New York, (212) 555-1234",
    },
    //...Additional Asset Contacts
  ];
  

  export const mockBarData = [
    {
      assetType: "Real Estate",
      "Real Estate": 7,
      count: 7,
      value: 12000000,
    },
    {
      assetType: "Cars",
      "Cars":3,
      count: 3,
      value: 250000,
    },
    {
      assetType: "Art",
      "Art": 10,
      value: 5000000,
    },
    {
      assetType: "Jewelry",
      "Jewelry": 15,
      value: 2000000,
    },
    {
      assetType: "Private Aircraft",
      "Private Aircraft": 1,
      value: 30000000,
    },
    {
      assetType: "Yachts",
      "Yachts": 2,
      value: 8000000,
    },
    {
      assetType: "Racehorses",
      "Racehorses": 5,
      value: 300000,
    },
  ];
  
  export const mockPieData = [
    {
      id: "Real Estate",
      label: "Real Estate",
      value: 12000000,
      color: "hsl(10, 70%, 50%)",
      count: 7,
    },
    {
      id: "Cars",
      label: "Cars",
      value: 250000,
      color: "hsl(30, 70%, 50%)",
      count: 3,
    },
    {
      id: "Art",
      label: "Art",
      value: 5000000,
      color: "hsl(50, 70%, 50%)",
      count: 10,
    },
    {
      id: "Jewelry",
      label: "Jewelry",
      value: 2000000,
      color: "hsl(70, 70%, 50%)",
      count: 15,
    },
    {
      id: "Private Aircraft",
      label: "Private Aircraft",
      value: 30000000,
      color: "hsl(90, 70%, 50%)",
      count: 1,
    },
    {
      id: "Yachts",
      label: "Yachts",
      value: 8000000,
      color: "hsl(110, 70%, 50%)",
      count: 2,
    },
    {
      id: "Racehorses",
      label: "Racehorses",
      value: 300000,
      color: "hsl(130, 70%, 50%)",
      count: 5,
    },
  ];

  
  export const mockLineData = [
    {
      id: "Real Estate",
      color: "hsl(10, 70%, 50%)",
      data: [
        { x: "Jan", y: 11500000 },
        { x: "Feb", y: 11600000 },
        { x: "Mar", y: 11750000 },
        { x: "Apr", y: 11900000 },
        { x: "May", y: 12000000 },
        { x: "Jun", y: 12200000 },
      ],
    },
    {
      id: "Cars",
      color: "hsl(30, 70%, 50%)",
      data: [
        { x: "Jan", y: 200000 },
        { x: "Feb", y: 210000 },
        { x: "Mar", y: 220000 },
        { x: "Apr", y: 230000 },
        { x: "May", y: 240000 },
        { x: "Jun", y: 250000 },
      ],
    },
    {
      id: "Art",
      color: "hsl(50, 70%, 50%)",
      data: [
        { x: "Jan", y: 4800000 },
        { x: "Feb", y: 4900000 },
        { x: "Mar", y: 4950000 },
        { x: "Apr", y: 4975000 },
        { x: "May", y: 5000000 },
        { x: "Jun", y: 5050000 },
      ],
    },
    {
      id: "Jewelry",
      color: "hsl(70, 70%, 50%)",
      data: [
        { x: "Jan", y: 1900000 },
        { x: "Feb", y: 1925000 },
        { x: "Mar", y: 1950000 },
        { x: "Apr", y: 1975000 },
        { x: "May", y: 2000000 },
        { x: "Jun", y: 2025000 },
      ],
    },
    {
      id: "Private Aircraft",
      color: "hsl(90, 70%, 50%)",
      data: [
        { x: "Jan", y: 29000000 },
        { x: "Feb", y: 29250000 },
        { x: "Mar", y: 29500000 },
        { x: "Apr", y: 29750000 },
        { x: "May", y: 30000000 },
        { x: "Jun", y: 30250000 },
      ],
    },
    {
      id: "Yachts",
      color: "hsl(110, 70%, 50%)",
      data: [
        { x: "Jan", y: 7800000 },
        { x: "Feb", y: 7900000 },
        { x: "Mar", y: 7950000 },
        { x: "Apr", y: 7975000 },
        { x: "May", y: 8000000 },
        { x: "Jun", y: 8025000 },
      ],
    },
    {
      id: "Racehorses",
      color: "hsl(130, 70%, 50%)",
      data: [
        { x: "Jan", y: 275000 },
        { x: "Feb", y: 280000 },
        { x: "Mar", y: 285000 },
        { x: "Apr", y: 290000 },
        { x: "May", y: 295000 },
        { x: "Jun", y: 300000 },
      ],
    },
  ];
  