const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcBase = path.join(__dirname, '..', 'projects arch kitchen');
const destBase = path.join(__dirname, '..', 'public', 'projects');

const projectConfigs = [
  {
    folder: 'Cedabrea residence-20261027T154238Z-1-001',
    cleanFolder: 'Cedabrea residence',
    slug: 'cedabrea-residence',
    title: 'CEDABREA RESIDENCE',
    category: 'RESIDENTIAL ARCHITECTURE & INTERIOR',
    shortCategory: 'RESIDENTIAL ARCHITECTURE',
    location: 'Scarborough, Toronto',
    area: '2,800 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'A bespoke modern architectural kitchen and joinery installation highlighting full-height clean cabinetry, expansive waterfall prep island, and seamless built-in appliances tailored for contemporary living.',
    details: 'Designed with continuous grain-matched cabinet facades, soft warm under-cabinet LED illuminations, and premium stone surfaces that bring functional harmony to everyday family life.'
  },
  {
    folder: 'Cloudberry residence-20261027T154238Z-1-001',
    cleanFolder: 'Cloudberry residence',
    slug: 'cloudberry-residence',
    title: 'CLOUDBERRY RESIDENCE',
    category: 'CUSTOM CABINETRY & STONEWORK',
    shortCategory: 'CUSTOM CABINETRY',
    location: 'Richmond Hill, Ontario',
    area: '3,200 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'An architectural composition of fluted wood accents, Taj Mahal quartzite surfaces, and custom pantry storage maximizing natural light and ergonomic workflow.',
    details: 'Features integrated refrigeration panels, dual prep zones, and mitred stone details that effortlessly connect the kitchen with the adjacent dining living salon.'
  },
  {
    folder: 'Concorde residence-20261027T154238Z-1-001',
    cleanFolder: 'Concorde residence',
    slug: 'concorde-residence',
    title: 'CONCORDE RESIDENCE',
    category: 'TURNKEY RENOVATION & BESPOKE JOINERY',
    shortCategory: 'TURNKEY RENOVATION',
    location: 'North York, Toronto',
    area: '3,500 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'A transformative renovation featuring architectural ceiling heights, matte lacquer cabinetry, and an oversized quartzite waterfall island designed for culinary precision.',
    details: 'Engineered with custom dovetailed internal drawers, hidden walk-in butler pantry, and integrated architectural linear lighting fixtures.'
  },
  {
    folder: 'Globe court-20261027T154238Z-1-001',
    cleanFolder: 'Globe court',
    slug: 'globe-court',
    title: 'GLOBE COURT',
    category: 'RESIDENTIAL INTERIOR & CABINETRY',
    shortCategory: 'RESIDENTIAL INTERIOR',
    location: 'Markham, Ontario',
    area: '2,600 SqFt',
    status: 'Completed',
    year: '2024',
    description: 'Minimalist European cabinetry design with handle-less push-to-open profiles, floating oak shelving, and Calacatta marble counter details.',
    details: 'Every millwork junction was laser-measured and fabricated in our Toronto workshop to guarantee flawless tolerances and continuous architectural alignment.'
  },
  {
    folder: 'Grafton residence-20261027T154238Z-1-001',
    cleanFolder: 'Grafton residence',
    slug: 'grafton-residence',
    title: 'GRAFTON RESIDENCE',
    category: 'BESPOKE ARCHITECTURAL KITCHEN',
    shortCategory: 'BESPOKE KITCHEN',
    location: 'Toronto, Ontario',
    area: '3,100 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'A luxurious kitchen transformation centered on rich contrasting materials, bronze hardware accents, and continuous full-slab stone backsplashes.',
    details: 'Includes dedicated coffee bar nook, wine storage refrigeration columns, and integrated acoustic ceiling details.'
  },
  {
    folder: 'Henshaw residence-20261027T154238Z-1-001',
    cleanFolder: 'Henshaw residence',
    slug: 'henshaw-residence',
    title: 'HENSHAW RESIDENCE',
    category: 'MODERN RESIDENTIAL ARCHITECTURE',
    shortCategory: 'MODERN ARCHITECTURE',
    location: 'Etobicoke, Ontario',
    area: '2,900 SqFt',
    status: 'Completed',
    year: '2024',
    description: 'Sophisticated open-concept architectural renovation introducing warm natural white oak textures, concealed appliance walls, and seamless floor transitions.',
    details: 'Custom engineered vent hood canopy with concealed extraction, custom cutlery drawer inserts, and durable porcelain stone countertops.'
  },
  {
    folder: 'High park avenue-20261027T154239Z-1-001',
    cleanFolder: 'High park avenue',
    slug: 'high-park-avenue',
    title: 'HIGH PARK AVENUE',
    category: 'HERITAGE HOME MODERNIZATION',
    shortCategory: 'HERITAGE MODERNIZATION',
    location: 'High Park, Toronto',
    area: '2,400 SqFt',
    status: 'Completed',
    year: '2024',
    description: 'Harmonizing classic Victorian architectural architecture with sleek contemporary millwork, slim shaker profiles, and timeless brass details.',
    details: 'Preserving period moulding lines while inserting state-of-the-art German hardware and deep pantry storage towers.'
  },
  {
    folder: 'Lakeland Cresent-20261027T154240Z-1-001',
    cleanFolder: 'Lakeland Cresent',
    slug: 'lakeland-cresent',
    title: 'LAKELAND CRESENT',
    category: 'WATERFRONT CONTEMPORARY VILLA',
    shortCategory: 'CONTEMPORARY RESIDENCE',
    location: 'Pickering, Ontario',
    area: '4,000 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'Sprawling lakeside residence kitchen with expansive panoramic glazing, two-tone textured cabinetry, and an architectural statement island.',
    details: 'Mitred stone waterfall ends, motorized upper cabinets, and integrated bar counter seating facing scenic outdoor vistas.'
  },
  {
    folder: 'Loon residence-20261027T154244Z-1-001',
    cleanFolder: 'Loon residence',
    slug: 'loon-residence',
    title: 'LOON RESIDENCE',
    category: 'MINIMALIST ARCHITECTURAL RETREAT',
    shortCategory: 'MINIMALIST RESIDENCE',
    location: 'Vaughan, Ontario',
    area: '3,300 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'Sleek architectural kitchen incorporating charcoal and muted sand tones, frameless flush doors, and high-performance sintered stone counters.',
    details: 'Custom appliance garage with pocket pivot doors, concealed induction cooktop integration, and mood-adaptive LED lighting.'
  },
  {
    folder: 'Luverne-20261027T154252Z-1-001',
    cleanFolder: 'Luverne',
    slug: 'luverne-residence',
    title: 'LUVERNE RESIDENCE',
    category: 'BESPOKE JOINERY & ARCHITECTURAL INTERIOR',
    shortCategory: 'BESPOKE JOINERY',
    location: 'Mississauga, Ontario',
    area: '2,750 SqFt',
    status: 'Completed',
    year: '2024',
    description: 'Warm minimalist space where clean architectural planes meet tactile natural stone and custom crafted white oak cabinetry.',
    details: 'Features floating architectural display shelving with concealed channel lighting and handcrafted custom drawer divider systems.'
  },
  {
    folder: 'Primerose-20261027T154254Z-1-001',
    cleanFolder: 'Primerose',
    slug: 'primerose-residence',
    title: 'PRIMEROSE RESIDENCE',
    category: 'RESIDENTIAL KITCHEN MAKEOVER',
    shortCategory: 'RESIDENTIAL MAKEOVER',
    location: 'Scarborough, Ontario',
    area: '2,100 SqFt',
    status: 'Completed',
    year: '2024',
    description: 'An elegant kitchen redesign combining bright neutral tones, custom crown details, and durable quartz workspaces designed for daily comfort.',
    details: 'Optimized corner pullout hardware, deep pots and pans drawers, and an integrated subway stone tile backdrop.'
  },
  {
    folder: 'Win lane residence-20261027T154256Z-1-001',
    cleanFolder: 'Win lane residence',
    slug: 'win-lane-residence',
    title: 'WIN LANE RESIDENCE',
    category: 'MODERN SCANDINAVIAN ARCHITECTURE',
    shortCategory: 'SCANDINAVIAN INTERIOR',
    location: 'Oakville, Ontario',
    area: '3,600 SqFt',
    status: 'Completed',
    year: '2025',
    description: 'Expansive open kitchen with Scandinavian architectural simplicity, organic materials, clean vertical lines, and luminous natural ambiance.',
    details: 'Custom ceiling drop detail matching island proportions, integrated banquette seating millwork, and flush panel cabinetry.'
  }
];

async function processAll() {
  if (!fs.existsSync(destBase)) {
    fs.mkdirSync(destBase, { recursive: true });
  }

  const outputProjectsData = [];

  for (const cfg of projectConfigs) {
    console.log(`Processing: ${cfg.title}`);
    const sourceDir = path.join(srcBase, cfg.folder, cfg.cleanFolder);
    const targetDir = path.join(destBase, cfg.slug);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    if (!fs.existsSync(sourceDir)) {
      console.warn(`Source folder missing: ${sourceDir}`);
      continue;
    }

    const files = fs.readdirSync(sourceDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    // Sort files cleanly
    files.sort();

    const projectImages = [];

    // Limit to max 12 high-res images per project for fast web performance
    const selectedFiles = files.slice(0, 12);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const srcPath = path.join(sourceDir, file);
      const outFileName = `image_${i + 1}.webp`;
      const outPath = path.join(targetDir, outFileName);
      const webPath = `/projects/${cfg.slug}/${outFileName}`;

      try {
        await sharp(srcPath)
          .rotate() // auto-orient based on EXIF
          .resize({ width: 1920, height: 1440, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(outPath);

        projectImages.push(webPath);
      } catch (err) {
        console.error(`Error processing image ${srcPath}:`, err.message);
      }
    }

    outputProjectsData.push({
      slug: cfg.slug,
      title: cfg.title,
      category: cfg.category,
      shortCategory: cfg.shortCategory,
      location: cfg.location,
      area: cfg.area,
      status: cfg.status,
      year: cfg.year,
      description: cfg.description,
      details: cfg.details,
      coverImage: projectImages[0] || '/hero_main.webp',
      images: projectImages
    });
  }

  // Write projects data file for Next.js app
  const dataTsPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
  const dirName = path.dirname(dataTsPath);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }

  const tsContent = `export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  shortCategory: string;
  location: string;
  area: string;
  status: string;
  year: string;
  description: string;
  details: string;
  coverImage: string;
  images: string[];
}

export const ARCH_PROJECTS: ProjectItem[] = ${JSON.stringify(outputProjectsData, null, 2)};
`;

  fs.writeFileSync(dataTsPath, tsContent, 'utf-8');
  console.log(`Successfully generated ${outputProjectsData.length} projects and written to ${dataTsPath}`);
}

processAll().catch(console.error);
