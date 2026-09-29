export type Product = {
  id: string;
  name: string;
  categoryId: string;
  description?: string;
  images?: string[];
  features?: string[];
  uses?: { title: string; description: string }[];
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    footers?: string[];
  };
};

export type Category = {
  id: string;
  name: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "water-purification-media",
    name: "Water Purification Media",
    products: [
      {
        id: "activated-carbon",
        name: "1.0 Activated Carbon",
        categoryId: "water-purification-media",
        description: "Activated carbon is a highly porous material known for its exceptional ability to adsorb impurities, toxins, and odors. Made from natural substances like wood, coal, or coconut shells, it undergoes a special activation process to create a vast surface area, making it ideal for applications such as water purification, air filtration, and medical treatments. Whether it's improving air quality, purifying water, or supporting industrial processes, activated carbon is a versatile solution for cleaning and detoxifying environments.",
        images: [
          "/images/products/Activated carbon Chips.png",
          "/images/products/Activated carbon Granular.png",
          "/images/products/Activated carbon Powder.png"
        ],
        tableData: {
          headers: ["Property", "AG-400", "AG-500", "AG-600", "AG-700", "AG-800", "AG-900", "AG-1000+"],
          rows: [
            ["Description", "Black dense granular"],
            ["Source of material", "Coconut shell charcoal base"],
            ["Iodine adsorption Mg/gm (±25)", "400", "500", "600", "700", "800", "900", "1000"],
            ["% Benzen adsorption", "10", "12", "14", "16", "19", "21", "23"],
            ["Total surface area m2/gm(±25)", "400", "500", "600", "700", "800", "900", "1000"],
            ["Hardness no.", "90-95", "90-95", "90-95", "85-90", "85-90", "80-85", "80-85"],
            ["Bulk density gm/cc", "0.65", "0.62", "0.6", "0.55", "0.52", "0.5", "0.45"],
            ["Ph of 1% water extract", "9-10", "9-10", "9-10", "9-10", "9-10", "9-10", "9-10"],
            ["% Of ash content", "3-5", "3-5", "3-5", "3-5", "3-5", "3-5", "3-5"],
            ["% Of silica content (max)", "3", "3", "3", "3", "3", "3", "3"],
            ["% Of moisture content (max)", "3", "3", "3", "3", "3", "3", "3"],
            ["Ctc adsorption min", "10 to 12", "15 to 17", "18 to 20", "20 to 22", "28 to 30", "38 to 40", "48 to 50"],
            ["Partical size 7.5% tolerance each way", "Any size can be supplied like 2,4,6 mm and powder"],
            ["% Of carbon content", "91-94"],
            ["Packing", "25 kg pp woven sacks with inside of polyethylene bag"]
          ]
        },
        uses: [
          { title: "Water Filtration", description: "Removes chlorine, contaminants, and odors from drinking water." },
          { title: "Air Purification", description: "Traps pollutants and eliminates odors in air purifiers." },
          { title: "Medical Treatment", description: "Used to treat poisoning and overdose by absorbing toxins." },
          { title: "Industrial Applications", description: "Deodorizes and purifies gases and liquids in various industries." },
          { title: "Cosmetics", description: "Featured in skincare products for detoxifying and cleansing the skin." }
        ]
      },
      {
        id: "safi-media-ghfo",
        name: "2.0 Safi Media, GHFO",
        categoryId: "water-purification-media",
        description: "Arsenic Removal Media contains iron oxide based selective resin media with high Surface area. It is a nano-particle based selective resin media designed to remove arsenic (arsenate and arsenite) from water. No backwash is required, will work on both Arsenic III and V in a wide range of water conditions.",
        images: [
          "/images/products/Granular hydrated ferric Oxide-1.png",
          "/images/products/Granular hydrated ferric Oxide-2.png"
        ],
        tableData: {
          headers: ["Property", "Value / Specification"],
          rows: [
            ["Fe₂O₃", ">70%"],
            ["Bulk Density", "0.75 kg/litre (min) ~ 0.95 kg/litre (max)"],
            ["Specific Surface Area", "250 m²/g (max) ~ 200 m²/g (min)"],
            ["Water Soluble Content", "2.0% (max)"],
            ["Water Content (ex works)", "20% (max)"],
            ["Sieve Analysis", "2.0 mm 5% (max)"],
            ["Aluminum (Al)", "<350 mg/kg"],
            ["Barium (Ba)", "<10 mg/kg"],
            ["Cobalt (Co)", "<150 mg/kg"],
            ["Chromium (Cr)", "<250 mg/kg"],
            ["Manganese (Mn)", "<3000 mg/kg"],
            ["Nickel (Ni)", "<300 mg/kg"],
            ["Lead (Pb)", "<3 mg/kg"],
            ["Zinc (Zn)", "<100 mg/kg"]
          ]
        },
        uses: [
          { title: "Primary Application", description: "Primarily used for Arsenic (III and V) removal, Phosphate removal, Heavy metals (i.e. lead, copper etc)." },
          { title: "pH Range", description: "Effective over a broader pH range (5.5 to 8.5)." },
          { title: "Efficiency", description: "Highly efficient for arsenic removal (both As(III) and As(V)). Less pH-dependent compared to AA. Can remove phosphate and silica effectively." },
          { title: "Capacity", description: "Generally higher adsorption capacity for arsenic compared to AA." },
          { title: "Lifespan", description: "Normal life time of GHFO is 4 times than AA and regenerable." },
          { title: "Drawbacks", description: "Higher initial cost compared to activated alumina." }
        ],
        features: [
          "When to use Activated Alumina (AA): Fluoride removal is the primary goal. Regeneration is feasible.",
          "When to use Granular Hydrated Ferric Oxide (GHFO): Arsenic (especially As(III)) is the primary contaminant. Disrupts virion cell and kills E.coli bacteria. It does not require pH controlling like AA and has less sensitivity to competing ions."
        ]
      },
      {
        id: "nano-porus",
        name: "3.0 Nano Porous",
        categoryId: "water-purification-media",
        description: "Nanoporous is an advanced filtration medium specifically designed for effective iron removal from water. It is composed of pumice granules (4-6mm size) and lime, blended and dried to create a porous and chemically active material. Nanoporous features a highly porous structure that provides an extensive surface area for adsorbing impurities, particularly iron. The addition of lime enhances the chemical interaction with dissolved iron, raising the water’s pH and promoting the formation of insoluble iron hydroxides, which are then captured by the pumice's pores. This dual-action mechanism ensures superior filtration, allowing Nanoporous to efficiently trap and remove iron contaminants, resulting in clean and safe water output.",
        images: [
          "/images/products/Nano Porous 2~4 mm.png",
          "/images/products/Nanoporous 6 mm.png",
          "/images/products/Nanoporous 25 kg Bag.png"
        ],
        tableData: {
          headers: ["Parameter", "Details"],
          rows: [
            ["Material Used", "Pumice granules (4-6 mm size) mixed with Lime"],
            ["Pumice Properties", "Size: 4-6 mm Porous High surface area for adsorption"],
            ["Density of Pumice", "0.6 - 0.9 g/cm³ (lightweight, porous structure)"],
            ["Surface Area of Pumice", "10 - 30 m²/g (dependent on porosity and particle size)"],
            ["Lime Properties", "Alkaline substance Increases water pH to facilitate iron precipitation"],
            ["Filtration Capacity", "Approx. 1-2 mg of iron removed per gram of pumice-lime mixture (depends on water quality and flow rate)"],
            ["Filtration Mechanism", "Adsorption: Pumice adsorbs iron particles due to its porous structure. Chemical Precipitation: Lime raises pH, leading to the formation of insoluble iron hydroxides (Fe(OH)₃)."],
            ["Chemical Reactions", "Fe²⁺ + OH⁻ → Fe(OH)₂ (ferrous hydroxide) | Fe³⁺ + OH⁻ → Fe(OH)₃ (ferric hydroxide)"],
            ["Filtration Efficiency", "Removes iron in the form of ferric/ferrous hydroxides. The efficiency improves with proper drying and surface contact"],
            ["Filtration Steps", "Use the dried mixture as a filtration medium for water with high iron content."],
            ["Applications", "Iron removal from drinking water. Treatment of well or borehole water with high iron content"],
            ["Maintenance", "Replace or clean the filter media regularly to ensure optimal performance."],
            ["Advantages", "Cost-effective, Environmentally friendly, Simple to apply"],
            ["Potential Limitations", "Requires periodic replacement or regeneration. May not remove other contaminants effectively"]
          ]
        },
        features: [
          "Porous structure: High surface area for enhanced adsorption.",
          "Chemical action: Lime component aids in iron precipitation.",
          "Durable: Withstands repeated filtration cycles.",
          "Environmentally friendly: Composed of natural materials."
        ],
        uses: [
          { title: "Water treatment plants", description: "Nanoporous is ideal for systems requiring efficient and reliable iron filtration, with a sustainable and long-lasting performance." },
          { title: "Household water filtration systems", description: "Efficient and reliable iron filtration for domestic use." },
          { title: "Industrial iron removal processes", description: "Reliable and sustainable long-lasting performance for industrial applications." }
        ]
      },
      {
        id: "eco-gac-cartridge",
        name: "4.0 Eco GAC Cartridge",
        categoryId: "water-purification-media",
        description: "The Eco GAC Cartridge is a high-performance, eco-friendly Granular Activated Carbon (GAC) filter cartridge designed for point-of-use and commercial water filtration systems.",
        features: [
          "Adsorption Media: Utilizing premium-grade, highly porous coconut shell activated carbon.",
          "Primary Function: Dechlorination and organic chemical reduction. It effectively strips chlorine, chloramines, volatile organic compounds (VOCs), unpleasant tastes, and foul odors from process water.",
          "Fluid Dynamics: The granular design allows for maximum contact time between the water and carbon pores while maintaining a low pressure drop and excellent flow rates across the filtration system."
        ],
        uses: [
          { title: "Application", description: "Ideal as a pre-treatment stage for Reverse Osmosis (RO) Plants or as a standalone residential/commercial polishing filter." }
        ]
      },
      {
        id: "eco-cto-cartridge",
        name: "5.0 Eco CTO Cartridge",
        categoryId: "water-purification-media",
        description: "The Eco CTO Cartridge is a high-performance Chlorine, Taste, and Odor (CTO) carbon block filter cartridge engineered for advanced water purification in residential, commercial, and industrial applications.",
        features: [
          "Adsorption Media: Formulated using premium, highly compressed coconut-shell activated carbon powder extruded into a rigid, uniform block structure.",
          "Dual-Action Filtration: Functions simultaneously as a chemical adsorbent and a mechanical sediment filter. It eliminates chlorine, chloramines, volatile organic compounds (VOCs), and odors, while trapping fine suspended solids and carbon fines.",
          "No Carbon Fines: Unlike granular filters, the bonded block design prevents fluid channeling and ensures zero carbon fine release into the downstream water line."
        ],
        uses: [
          { title: "Application", description: "Optimized as a critical pre-treatment protection stage for Reverse Osmosis (RO) membranes or as a final polishing step in Water Treatment Plants (WTP)." }
        ]
      },
      {
        id: "multi-grade-water-filter",
        name: "6.0 Multi Grade Water Filter",
        categoryId: "water-purification-media",
        description: "The Multi-Grade Water Filter (MGF) is an advanced, deep-bed pressure filtration system designed to remove high concentrations of suspended solids, turbidity, and fine particulate matter from raw water.",
        features: [
          "Graded Media Layering: Utilizes a meticulously calculated configuration of multi-layered media—ranging from coarse gravel and anthracite at the top to fine silica quartz sand and garnet at the bottom.",
          "Deep-Bed Filtration: Unlike conventional single-media sand filters that only trap dirt on the top surface, the multi-grade design forces water through progressively tighter layers, trapping particles throughout the entire depth of the filter bed.",
          "High Throughput & Efficiency: Operates at significantly higher filtration velocities and flow rates than standard sand filters while providing a much higher dirt-holding capacity and lower pressure drop."
        ],
        uses: [
          { title: "Application", description: "Engineered as an essential pre-treatment system to protect downstream equipment in Water Treatment Plants (WTP), Reverse Osmosis (RO) Plants, and industrial process lines." }
        ]
      },
      {
        id: "coagulants",
        name: "7.0 Coagulant",
        categoryId: "water-purification-media",
        description: "Coagulants are specialized chemical formulations engineered to destabilize suspended colloidal particles and dissolved organic matter in water, initiating the primary phase of industrial and municipal water purification.",
        features: [
          "Charge Neutralization: Operates by neutralizing the negative electrical charges carried by microscopic impurities (such as silt, clay, bacteria, and organic color compounds) that naturally repel each other and stay suspended.",
          "Micro-Floc Formation: Once the repulsive forces are neutralized, the microscopic particles immediately begin to attract and clump together into tiny, visible masses called micro-flocs.",
          "Versatile Chemical Range: Available in both inorganic metal salts (such as Aluminum Sulfate/Alum and Polyaluminum Chloride/PAC) and high-charge organic polymers tailored for specific water pH profiles and turbidity levels."
        ],
        uses: [
          { title: "Application", description: "Deployed as a critical initial dosing chemical in Water Treatment Plants (WTP), Effluent Treatment Plants (ETP), and Sewage Treatment Plants (STP) to clear turbid water prior to downstream sedimentation and filtration stages." }
        ]
      },
      {
        id: "flocculants",
        name: "8.0 Flocculent",
        categoryId: "water-purification-media",
        description: "Flocculants are high-molecular-weight polymeric chemical formulations designed to bridge and agglomerate destabilized micro-particles into large, heavy masses for rapid separation from water.",
        features: [
          "Polymeric Bridging Mechanics: Formulated with long, cross-linked molecular chains that physically capture and bind together the micro-flocs formed during the prior coagulation stage.",
          "Rapid Sedimentation: Converts small, slow-settling particles into massive, dense clumps called \"macro-flocs,\" drastically accelerating gravity settling and clarification speeds.",
          "Charge Specificity: Available in anionic (negatively charged), cationic (positively charged), and non-ionic forms to target specific industrial sludge types and ionic balances."
        ],
        uses: [
          { title: "Application", description: "Heavily utilized in Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), and industrial sludge dewatering systems (like filter presses and centrifuges) to achieve crystal-clear water separation." }
        ]
      },
      {
        id: "reverse-osmosis-plant-ro",
        name: "9.0 Reverse Osmosis Plant-RO",
        categoryId: "water-purification-media",
        description: "The Reverse Osmosis (RO) Plant is an advanced, high-pressure membrane desalination and purification system engineered to produce ultra-pure process water by removing dissolved solids and chemical ions.",
        features: [
          "Cross-Flow Membrane Separation: Uses high-pressure pumps to force water through semi-permeable membranes with pore sizes as small as 0.0001 microns, blocking larger molecules while allowing pure water molecules to pass.",
          "Comprehensive Rejection Rate: Effectively removes 95% to 99% of Total Dissolved Solids (TDS), including dissolved salts, heavy metals, silica, fluorides, nitrates, pyrogens, and microorganisms.",
          "Automated Process Controls: Features integrated clean-in-place (CIP) systems, anti-scalant dosing lines, and real-time digital monitoring for feed-water pressure, permeate conductivity, and recovery flow rates."
        ],
        uses: [
          { title: "Application", description: "Engineered as a critical water-security infrastructure for high-purity industrial processes, boiler feed-water, beverage formulation, pharmaceutical production, and brackish/sea water desalination." }
        ]
      },
      {
        id: "water-treatment-plant-wtp",
        name: "9.0 Water Treatment Plant-WTP",
        categoryId: "water-purification-media",
        description: "The Water Treatment Plant (WTP) is an integrated industrial system designed to treat raw surface water or groundwater, rendering it safe, pure, and compliant for municipal consumption or industrial process manufacturing [WTP].",
        features: [
          "Multi-Stage Processing Architecture: Features a sequential series of unit operations including primary aeration, chemical coagulation and flocculation, lamella or gravity clarification, deep-bed media filtration, and final disinfection.",
          "Targeted Contaminant Removal: Engineered to drastically reduce total suspended solids (TSS), turbidity (NTU), heavy metals (such as iron, manganese, and arsenic), organic pathogens, and foul odors.",
          "Scalable Module Engineering: Constructed using corrosion-resistant materials (such as FRP, epoxy-coated mild steel, or concrete structures) tailored to meet specific volumetric flow-rate requirements (m³/hr)."
        ],
        uses: [
          { title: "Application", description: "Serves as the primary water purification framework for beverage factories, pharmaceutical plants, textile mills, power plants, and municipal residential grids." }
        ]
      },
      {
        id: "effluent-treatment-plant-etp",
        name: "10.0 Effluent treatment Plant-ETP",
        categoryId: "water-purification-media",
        description: "The Effluent Treatment Plant (ETP) is an advanced industrial wastewater treatment system designed to detoxify and purify complex manufacturing discharge so it can be safely recycled or released into the environment.",
        features: [
          "Multi-Stage Treatment Process: Combines physical screening, chemical coagulation and flocculation, biological aeration (using active microorganisms), and tertiary polishing stages.",
          "High Contaminant Reduction: Efficiently breaks down and extracts high levels of Biological Oxygen Demand (BOD), Chemical Oxygen Demand (COD), oils, heavy metals, toxic chemical residues, and color dyes.",
          "Regulatory Compliance: Engineered to ensure industrial discharge meets strict legal environmental standards, helping factories secure certification from the Department of Environment."
        ],
        uses: [
          { title: "Application", description: "Vital infrastructure for heavy manufacturing sectors, including textile mills, pharmaceutical facilities, tanneries, chemical plants, and food processing units." }
        ]
      },
      {
        id: "acid-treatment-plant-atp",
        name: "11.0 Acid Treatment Plant- ATP",
        categoryId: "water-purification-media",
        description: "The Acid Treatment Plant (ATP) is a highly specialized industrial wastewater system engineered to safely manage, neutralize, and treat highly corrosive, low-pH acidic effluents generated during manufacturing processes.",
        features: [
          "Corrosion-Resistant Metallurgy: Constructed using highly durable, chemical-resistant materials such as Fiber-Reinforced Plastic (FRP), High-Density Polyethylene (HDPE), or specialized rubber-lined steel to withstand extreme acidity.",
          "Automated Dual-Stage Neutralization: Utilizes digital pH sensors and automated chemical dosing pumps to precisely inject alkaline neutralizing agents (such as sodium hydroxide or lime) to stabilize the water to a neutral pH range (6.5 to 8.5).",
          "Heavy Metal Precipitation: Engineered to induce the precipitation of dissolved heavy metals (common in acidic waste) into solid hydroxides so they can be coagulated, flocculated, and mechanically separated."
        ],
        uses: [
          { title: "Application", description: "Vital infrastructure for chemical manufacturing, electroplating facilities, steel pickling lines, mining operations, and battery manufacturing plants before discharging effluent into secondary treatment lines." }
        ]
      },
      {
        id: "base-treatment-plant-btp",
        name: "12.0 Base treatment Plant-BTP",
        categoryId: "water-purification-media",
        description: "The Base Treatment Plant (BTP) is a highly specialized industrial wastewater system engineered to safely manage, neutralize, and treat highly caustic, high-pH alkaline effluents generated during industrial manufacturing processes.",
        features: [
          "Alkali-Resistant Engineering: Fabricated using specialized materials and protective coatings—such as High-Density Polyethylene (HDPE), Polypropylene (PP), and heavy-duty epoxy liners—that prevent structural degradation from highly alkaline chemicals.",
          "Automated Acidic Neutralization: Utilizes digital pH transmitters and automated dosing loops to precisely inject acidic neutralizing agents (such as sulfuric acid, hydrochloric acid, or carbon dioxide gas) to safely adjust the effluent to a neutral pH range.",
          "Solids Separation: Designed to handle and precipitate hardness ions, carbonated compounds, and organic soaps that commonly form in high-pH industrial wastewater."
        ],
        uses: [
          { title: "Application", description: "Critical infrastructure for textile dyeing mills, pulp and paper processing, commercial laundry facilities, chemical synthesis, and food processing plants before wastewater can be safely routed to secondary treatment lines or an Effluent Treatment Plant (ETP)." }
        ]
      },
      {
        id: "sewage-treatment-plant-stp",
        name: "13.0 Sewage treatment Plant-STP",
        categoryId: "water-purification-media",
        description: "The Sewage Treatment Plant (STP) is an integrated biological and physical treatment system designed to treat domestic wastewater and sanitary sewage, converting it into safe, clear, and environmentally compliant water.",
        features: [
          "Biological Digestion Mechanics: Utilizes advanced aerobic and anaerobic biological processes—such as Moving Bed Biofilm Reactors (MBBR) or Activated Sludge Processes (ASP)—where specialized microorganisms break down and digest dissolved organic matter.",
          "Multi-Stage Purification Steps: Features a multi-tiered treatment path starting with physical screening (bar screens and grit chambers) to remove large solids, followed by primary clarification, secondary biological aeration, and tertiary polishing (disinfection via chlorine or UV).",
          "Safe Waste Disinfection: Destroys harmful pathogens, fecal coliforms, and viruses while drastically reducing Biological Oxygen Demand (BOD) and Total Suspended Solids (TSS) to meet strict local municipal discharge standards."
        ],
        uses: [
          { title: "Application", description: "Essential sanitation infrastructure for residential housing complexes, commercial office towers, shopping malls, hotels, and large industrial staff quarters." }
        ]
      }
    ],
  },
  {
    id: "industrial-glue",
    name: "Industrial Glue",
    products: [
      {
        id: "bondix-paper-to-paper",
        name: "1.0 Bondix -Paper to Paper",
        categoryId: "industrial-glue",
        description: "Bondix is a high quality, extremely high solids, fast-setting, paper assembly & lamination adhesive that when properly used makes joints stronger than the paper itself. Bondix was formulated from Polymer emulsion for bonding paper that is hard-to-stick or high in moisture content with press times as short as 30–120 seconds. This product is a multi-purpose paper working adhesive that is excellent for gluing up paper frames, lamination assembly, Paper bags, paper tubes, carton assembly, chip board, cartoon and general paper converting operations etc. Bondix is also successful with other cellulose materials as long as one surface is porous to allow moisture to escape the glue line. MG 206 maintains excellent heat resistance and lower chalk point properties to withstand colder temperatures during the assembly process.",
        images: [
          "/images/products/bandix-1.png",
          "/images/products/Bandix-2.png",
          "/images/products/bandix-3.png"
        ],
        tableData: {
          headers: ["Parameter", "Specification"],
          rows: [
            ["Appearance", "Smooth white emulsion"],
            ["Solids Content", "15–20%"],
            ["Viscosity (Brookfield, 25°C)", "2,000–3,000 cP"],
            ["pH", "4.5–6.5"],
            ["Density", "1.00–1.10 g/cm³"],
            ["Open Time", "15–60 seconds"],
            ["Initial Tack", "High"],
            ["Setting Time", "30–120 seconds"],
            ["Bond Strengths", "Fiber tear after 24 h"],
            ["Application Temperature", "15–40°C"],
            ["Shelf Life", "3–4 months"],
            ["VOC Content", "Near zero"]
          ]
        },
        features: [
          "Performance Characteristics: Good initial tack, Good paper fiber tear strength, Water-based system, Easy clean-up with water before drying.",
          "Storage: Store in tightly closed containers at 15–40°C.",
          "Shelf Life: Three months from the date of production.",
          "Packaging: Available in HDPE drums, plastic containers or bulk packaging."
        ],
        uses: [
          { title: "Application Areas", description: "Paper bag manufacturing, Paper tube winding, Paper carton assembly & Paper lamination, General paper converting" },
          { title: "Application Method", description: "Roller, Brush, Glue wheel & Automatic gluing machine" }
        ]
      },
      { id: "bondwood-glue-for-wood", name: "2.0 Bondwood- Glue for wood", categoryId: "industrial-glue" },
    ],
  },
  {
    id: "product-vehicles",
    name: "Product Vehicles",
    products: [
      {
        id: "k-shield-tyre-gel",
        name: "1.0 K Shield -Tyre Gel",
        categoryId: "product-vehicles",
        description: "K Shield Tyre Gel is a premium, high-viscosity anti-puncture tire sealant engineered to prevent air loss from tread punctures in tubeless tires.",
        features: [
          "Instant Puncture Sealing: Formulated with a fiber-reinforced polymer gel that instantly seals punctures (typically up to 6mm) from nails, thorns, and sharp debris the moment they occur.",
          "Hydrodynamic Balance: Formulated to stay evenly distributed across the inner tire tread during high-speed rotation, preventing tire imbalance or vibration.",
          "Thermal & Anti-Corrosive Stability: Operates reliably across extreme temperature ranges without drying up, balling, or corroding steel belts, aluminum rims, and tire valves."
        ],
        uses: [
          { title: "Application", description: "Ideal for heavy-duty commercial vehicles, passenger cars, motorcycles, and off-road industrial equipment to prevent downtime and extend tire life." }
        ]
      },
    ],
  },
  {
    id: "carbon-for-battery-glass-industries",
    name: "Carbon for Battery & Glass Industries",
    products: [
      {
        id: "coal-powder-20-to-350-mesh",
        name: "1.0 Coal Powder 20 to 350 Mesh",
        categoryId: "carbon-for-battery-glass-industries",
        description: "The Coal Powder (20 to 350 Mesh) is a high-purity, finely milled carbonaceous material specifically graded for structural and chemical performance in industrial manufacturing processes.\nWhen utilized in the glass manufacturing industry alongside silica sand, it serves as a critical process additive and refining agent.",
        features: [
          "Targeted Amber & Green Coloration: Acts as a precise reducing agent when mixed with silica sand and iron oxides. It controls the oxidation state of iron to develop the specific dark amber, brown, or emerald green tones required for UV-protective container glass and beer/wine bottles.",
          "Sulfate Reduction & Refining: Works as a chemical catalyst to reduce sodium sulfate (Na₂SO₄) in the glass batch melt. This lowers the overall melting temperature, accelerates the melting rate of the silica sand, and eliminates structural gas bubbles (seeds) to ensure crystal-clear glass formation.",
          "Mesh Gradient Adaptability: The 20 to 350 mesh range allows for precise particle sizing. Coarser fractions prevent early dust loss in high-temperature furnaces, while the ultra-fine 350-mesh particles guarantee a highly homogenous mix with silica sand for rapid chemical reaction kinetics."
        ]
      },
      {
        id: "carbon-powder-mesh-20-to-450-mesh",
        name: "2.0 Carbon Powder, Mesh 20 to 450 Mesh",
        categoryId: "carbon-for-battery-glass-industries",
        description: "The Carbon Powder (20 to 450 Mesh) is a highly specialized, structural-grade carbonaceous material engineered to serve as a high-surface-area conductive matrix or additive within energy storage applications.\nWhen formulated into battery chemistries for lithium-ion, sodium-ion, or advanced aqueous battery cells, it acts as a critical component in the slurry formulation for anode and cathode current collector coatings.",
        features: [
          "Conductive Percolation Network: Formulated as a secondary conductive carbon additive (typically blended at 2% to 10% by weight) to bridge the electronic gaps between inherently low-conductivity active electrode materials (e.g., LFP, NMC, or hard carbon). This drastically minimizes electrode polarization and lowers internal charge-transfer resistance.",
          "Zero-Grit Coating Homogeneity: The fine end of the range (325 to 450 mesh, corresponding to 44 to 32 microns) is highly critical for thin-film wet slurry casting. It guarantees an ultra-smooth coating thickness on copper or aluminum current collector foils, eliminating sharp micro-grit outliers that could puncture the separator film or cause localized current density spikes.",
          "Volumetric Buffer & Binding Matrix: Provides an elastic, high-surface-area carbon matrix that buffers the mechanical expansion and contraction of active material particles (especially silicon or graphite anodes) during cyclic lithiation and delithiation, preventing film delamination.",
          "Optimized Rheology for Blade Coating: The engineered particle size distribution allows the carbon-binder slurry (such as PVDF in NMP or carboxymethyl cellulose in water) to achieve the perfect viscosity and rheological flow required for high-speed doctor-blade or slot-die coating processes."
        ]
      }
    ],
  },
  {
    id: "carbon-for-food-beverage-sugar-industries",
    name: "Carbon for Food, Beverage & Sugar Industries",
    products: [
      { 
        id: "food-activated-carbon-powder", 
        name: "1.0 Activated Carbon –Powder, 200 to 400 Mesh.", 
        categoryId: "carbon-for-food-beverage-sugar-industries"
      },
      { 
        id: "food-activated-carbon-granular", 
        name: "2.0 Activated Carbon –Granular 1 to 4 mm", 
        categoryId: "carbon-for-food-beverage-sugar-industries"
      },
    ],
  },
  {
    id: "sustainable-crops-and-vegetable-nutrition",
    name: "Sustainable Crops and Vegetable Nutrition",
    products: [
      {
        id: "sushama-fertilizer",
        name: "1.0 Sushama Fertilizer",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Sushama Fertilizer is a premium, high-efficiency organo-chemical slow-release fertilizer scientifically engineered to provide a continuous, synchronized supply of nutrients to crops while actively improving long-term soil architecture.",
        features: [
          "Slow-Release Matrix: Formulated by structurally bonding essential primary macronutrients (NPK) within a dense organic carbon compound matrix. This natural encapsulation slows down nutrient dissolution, extending the feeding window and drastically reducing nitrogen leaching and volatilization losses.",
          "Dual Action Nutrition: Delivers the rapid, high-impact growth kick of pure chemical inputs alongside the slow, sustained feeding mechanics of top-tier organic matter, preventing the typical nutrient spikes and crashes that stress plants.",
          "Cation Exchange Booster: Enhances the soil's Cation Exchange Capacity (CEC) and fuels beneficial microbial activity in the root zone (rhizosphere), leading to superior root branching and optimized nutrient uptake efficiency."
        ],
        uses: [
          { title: "Application", description: "Engineered for high-value agricultural crops, vegetables, tea estates, and commercial fruit orchards, allowing farmers to reduce application frequencies, lower input costs, and protect soil health." }
        ]
      },
      {
        id: "aqua-fertilizer",
        name: "2.0 Aqua Fertilizer",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Aqua Fertilizer is a highly specialized, water-soluble nutrient formulation engineered to stimulate biological productivity and maintain water quality in intensive aquaculture, aquaponics, and hydroponic systems.",
        features: [
          "Phytoplankton & Bloom Regulation: Scientifically balanced to promote the steady growth of beneficial microalgae and green phytoplankton. This builds a rich natural food base for fish and shrimp while blocking toxic blue-green algae blooms.",
          "Trace Mineral Matrix: Packed with essential chelated micronutrients (including Iron, Magnesium, Zinc, and Manganese) that strengthen the immune systems, shell development, and survival rates of aquatic life.",
          "Strict Ammonia Controls: Formulated without excess free ammonia or raw organic wastes, ensuring it won't trigger dangerous dissolved oxygen dips or toxic unionized ammonia (NH₃) spikes in your ponds."
        ],
        uses: [
          { title: "Application", description: "Ideal for commercial shrimp and fish hatcheries, high-density grow-out ponds, aquaponics setups, and commercial hydroponic crop lines." }
        ]
      },
      {
        id: "eco-fertilizer-vermi-composed",
        name: "3.0 Eco Fertilizer ( Vermi Composed)",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Eco Fertilizer (Vermi Composed) is a premium, 100% organic bio-fertilizer produced through the controlled biological decomposition of organic matter by specialized earthworms. It acts as an elite soil conditioner and nutrient-rich growth promoter for sustainable agriculture.",
        features: [
          "Humus & Microbial Enrichment: Packed with highly stable organic humus and a diverse community of beneficial soil microbes (including nitrogen-fixing and phosphate-solubilizing bacteria) that naturally suppress soil-borne plant pathogens.",
          "High Cation Exchange Capacity (CEC): Significantly raises the soil's CEC, allowing root zones to hold onto and absorb essential micronutrients far more efficiently.",
          "Phytohormone Matrix: Contains naturally occurring plant growth regulators—such as auxins, gibberellins, and cytokinins—that trigger rapid seed germination, robust root branching, and enhanced flowering."
        ],
        uses: [
          { title: "Application", description: "Ideal for organic farming, commercial greenhouses, landscaping, domestic home gardens, and fruit orchards to permanently restore degraded soils and boost crop resilience." }
        ]
      },
      {
        id: "soil-conditioner",
        name: "4.0 Soil Conditioner",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Soil Conditioner is a premium, high-performance soil amendment engineered to alter and rehabilitate the physical, chemical, and biological structure of degraded agricultural land.",
        features: [
          "Soil Structure & Porosity Correction: Transforms tight, compacted clay soils by improving aeration, root penetration, and water drainage, while simultaneously binding loose, sandy soils to prevent structural erosion.",
          "Moisture Retention Optimization: Maximizes the water-holding capacity (WHC) within the root zone, keeping moisture available during dry spells and lowering overall irrigation costs.",
          "Cation Exchange Capacity (CEC) Enhancement: Optimizes the soil’s chemical binding matrix, allowing it to hold onto and release macro and micronutrients far more efficiently, which minimizes fertilizer runoff."
        ],
        uses: [
          { title: "Application", description: "Ideal for remediating highly depleted soils, heavy clay fields, arid sandy zones, and commercial greenhouse beds to maximize long-term crop productivity." }
        ]
      },
      {
        id: "botanical-pest-repellent",
        name: "5.0 Botanical Pest repellent",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Botanical Pest Repellent is a highly effective, non-toxic bio-pesticide formulated from concentrated plant extracts and essential oils. It is engineered to protect crops without leaving harmful chemical residues on food or in the soil.",
        features: [
          "Multi-Target Mode of Action: Utilizes naturally occurring volatile organic compounds (VOCs) that disrupt the feeding, mating, and egg-laying behaviors of pests through antifeedant, repellent, and insect growth regulator (IGR) mechanics.",
          "Zero Chemical Residue: Biodegrades rapidly in the environment via solar UV rays and soil microbes, eliminating the risk of chemical runoff, soil toxicity, or groundwater contamination.",
          "Target Specificity: Highly lethal to destructive, soft-bodied crop pests (such as aphids, thrips, whiteflies, and mites) while posing minimal risk to beneficial pollinators like honeybees and ladybugs when applied correctly."
        ],
        uses: [
          { title: "Application", description: "Ideal for organic farming, commercial greenhouses, export-oriented horticulture, and home gardens where strict Zero-Residue or Pre-Harvest Interval (PHI) compliance is required." }
        ]
      },
      {
        id: "hydroponic-nutrition",
        name: "6.0 Hydroponic Nutrition",
        categoryId: "sustainable-crops-and-vegetable-nutrition",
        description: "Hydroponic Nutrition is a premium, 100% water-soluble mineral nutrient formulation engineered to deliver complete, immediately bioavailable food directly to plant roots in soil-less cultivation systems.",
        features: [
          "Precisely Balanced Mineral Profiles: Formulated as a multi-part system (typically containing separate macronutrient and micronutrient concentrates) to prevent chemical precipitation, delivering exact ratios of Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, and chelated trace minerals.",
          "100% Chelated Micronutrients: Uses high-stability chelating agents (such as EDTA and DTPA) to ensure vital microelements like Iron, Zinc, and Manganese remain fully soluble and stable across wide fluctuating pH levels.",
          "Zero Contaminants & Carbon Residues: Formulated with ultra-pure, technical-grade mineral salts that leave zero heavy metal residues, zero sediment, and zero organic sludge, preventing clogging in high-tech drippers, spray nozzles, and delivery lines."
        ],
        uses: [
          { title: "Application", description: "Engineered for commercial soil-less setups—including Deep Water Culture (DWC), Nutrient Film Technique (NFT), aeroponics, and coco-coir systems—to maximize vegetative growth rates and crop yields in commercial greenhouses." }
        ]
      },
    ],
  },
  {
    id: "energy-sector",
    name: "Energy Sector",
    products: [
      {
        id: "pit-coal",
        name: "1.0 Pit Coal",
        categoryId: "energy-sector",
        description: "Pit Coal (Fuel Grade) is a premium, high-density mineral energy source processed and graded specifically for heavy industrial thermal applications and solid fuel combustion systems.",
        features: [
          "High Calorific Value: Delivers a concentrated, stable thermal output with high British Thermal Units (BTU/kcal), providing intense, long-lasting heat generation required for continuous industrial processes.",
          "Optimized Combustion Mechanics: Features a high fixed-carbon content and a balanced volatile matter profile, ensuring steady ignition, uniform heat distribution, and low smoke emissions compared to lower-grade coals.",
          "Low Moisture & Ash Content: Mechanically processed and dried to minimize internal moisture, maximizing combustion efficiency while keeping residual ash volumes low to reduce clinkering and boiler maintenance down-time."
        ],
        uses: [
          { title: "Application", description: "Engineered as a high-performance primary fuel source for heavy industrial boilers, steel-rolling mills, brick kilns, cement manufacturing plants, and high-temperature thermal power generation facilities." }
        ]
      },
      {
        id: "solar-energy-solutions",
        name: "2.0 Solar Energy Solutions (Inverter, Solar, Batteries)",
        categoryId: "energy-sector",
        description: "Solar Energy Solutions by Impex Eco Tech Limited provide fully integrated, Tier-1 engineered photovoltaic systems designed to deliver clean, independent power for residential, commercial, and heavy industrial applications.",
        features: [
          "High-Efficiency Solar Modules: Utilizing advanced monocrystalline half-cell and N-type PV technologies, engineered to maximize solar conversion efficiency even under low-light or high-temperature ambient conditions.",
          "Intelligent Solar Inverters: Equipped with multi-MPPT (Maximum Power Point Tracking) algorithms and hybrid smart-grid capabilities, ensuring ultra-fast DC-to-AC conversion efficiency exceeding 98% with seamless grid-tie and off-grid synchronization.",
          "Deep-Cycle Battery Storage: Paired with long-life, thermal-runaway-protected Lithium Iron Phosphate (LiFePO4) or heavy-duty tubular gel batteries, offering high depth of discharge (DoD) and integrated smart Battery Management Systems (BMS)."
        ],
        uses: [
          { title: "Application", description: "Scalable power architecture for uninterrupted industrial factory operations, net-metering commercial facilities, solar-powered water pumping, and remote off-grid residential backups." }
        ]
      },
      {
        id: "wind-energy-solutions",
        name: "3.0 Wind Energy Solutions (Inverter, Wind turbine, Batteries)",
        categoryId: "energy-sector",
        description: "Wind Energy Solutions by Impex Eco Tech Limited provide high-efficiency, micro-to-utility scale wind power generation systems engineered to capture kinetic atmospheric energy and convert it into a stable electrical supply [Wind Energy Solutions].",
        features: [
          "Aerodynamic Wind Turbines: Features advanced horizontal-axis (HAWT) and vertical-axis (VAWT) wind turbines engineered with lightweight, carbon-fiber blades and low-wind-speed startup capabilities (starting at velocities as low as 2.0 m/s).",
          "Smart Wind Inverters: Equipped with specialized digital microprocessors and automatic braking control modules to manage fluctuating turbine rotation speeds, delivering steady frequency matching and pure sine-wave AC power output.",
          "Deep-Cycle Battery Integration: Coupled with high-capacity Lithium Iron Phosphate (LiFePO4) or heavy-duty tubular gel battery banks, providing a dense energy reserve that levels out wind intermittency."
        ],
        uses: [
          { title: "Application", description: "Ideal for coastal industrial zones, remote off-grid telecommunication towers, hybrid wind-solar agricultural grids, and localized community power systems." }
        ]
      },
      {
        id: "energy-storage-system",
        name: "4.0 Energy Storage System",
        categoryId: "energy-sector",
        description: "The Energy Storage System (ESS) is an advanced, utility-scale and commercial-grade power reservoir designed to store electrical energy from renewable sources or the grid, releasing it smoothly during peak demand or grid outages.",
        features: [
          "Advanced Battery Electrochemistry: Utilizes high-energy-density, thermal-runaway-protected Lithium Iron Phosphate (LiFePO4) battery cells, guaranteeing an extended lifecycle of up to 6,000+ charge cycles at deep depths of discharge.",
          "Intelligent Battery Management System (BMS): Features real-time, cell-level digital monitoring for state-of-charge (SoC), thermal balancing, voltage regulation, and overcurrent protection to maintain maximum system safety.",
          "Smart Power Conditioning System (PCS): Integrated with heavy-duty bi-directional inverters that facilitate millisecond-level automated transfer switching, enabling rapid response for peak shaving, load leveling, and immediate uninterruptible power supply (UPS) backup."
        ],
        uses: [
          { title: "Application", description: "Critical power infrastructure for industrial manufacturing plants, commercial office towers, micro-grids, and Solar/Wind Power Plants to ensure absolute grid stability and zero-downtime operations." }
        ]
      },
    ],
  },
  {
    id: "paints",
    name: "Paints",
    products: [
      {
        id: "rust-converter",
        name: "1.0 Rust Converter",
        categoryId: "paints",
        description: "Rust Converter is an advanced, high-performance chemical formulation engineered to treat rusted iron and steel surfaces by chemically transforming iron oxide (rust) into a stable, protective polymer layer.",
        features: [
          "Chemical Conversion Mechanics: Formulated with an active organic acid matrix combined with an acrylic polymer emulsion. It directly reacts with porous iron oxide, converting it into a hard, insoluble black ferric tannate/phosphate complex.",
          "Dual-Action Primer Film: Simultaneously destroys active corrosion and cures into a durable, protective polymer primer film that seals the substrate against moisture, oxygen, and future oxidation.",
          "Surface Preparation Efficiency: Eliminates the need for labor-intensive, hazardous sandblasting or grinding down to bare metal. The converter requires only the removal of loose, flaking rust before direct liquid application."
        ],
        uses: [
          { title: "Application", description: "Ideal for heavy-duty structural steel maintenance, pipelines, maritime shipping hulls, storage tanks, and industrial machinery prior to applying protective topcoats." }
        ]
      },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  for (const category of categories) {
    const product = category.products.find((p) => p.id === id);
    if (product) return product;
  }
  return undefined;
}
