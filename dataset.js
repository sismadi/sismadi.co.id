const pages = {

    home: [
        {
            section: 'hero',
            title: 'PT Sismadi<br>Langit Solusi',
            tagline: 'Expertise Delivered Personally',
            description: 'Solusi teknologi Web, Cybersecurity, IoT, dan pelatihan TI yang efisien, aman, dan berkelanjutan — dipimpin langsung oleh praktisi berpengalaman.',
            imgClass: 'di-sls',
            badges: ['NIB 2906220081075', 'PMDN &middot; PT Perorangan', 'Jakarta Timur'],
            cta: { text: 'Pelajari Profil Perusahaan &raquo;', link: 'profile' }
        },

        {
            section: 'features',
            items: [
                {
                    icon: 'di-save',
                    title: 'Software Solutions',
                    content: 'Pengembangan sistem custom berbasis <strong>DonatJS MVC Framework</strong> &mdash; arsitektur zero-dependency, modular, dan aman.',
                    linkText: '+ Detail Layanan',
                    linkTarget: 'solutions'
                },
                {
                    icon: 'di-setting',
                    title: 'PT Sismadi Langit Solusi',
                    content: 'Penerbitan buku teknologi dan pengelolaan jurnal ilmiah <strong>RETAS &amp; GATRA</strong> sebagai kontribusi aktif riset TI.',
                    linkText: '+ Detail Publikasi',
                    linkTarget: 'press'
                },
                {
                    icon: 'di-person',
                    title: 'IT Academy',
                    content: 'Pelatihan kompetensi bidang Mobile &amp; Web Programming, workshop microservices, dan IoT berbasis praktik industri.',
                    linkText: '+ Detail Pelatihan',
                    linkTarget: 'solutions'
                }
            ]
        },

        {
            section: 'article',
            title: 'Berita & Publikasi',
            layout: 'split',
            leftCol: {
                subtitle: 'Publikasi Ilmiah Terbaru',
                lines: [
                    '<strong>2026 &middot; EDUTECH Vol.6 No.2</strong>',
                    'Penerapan Presensi Daring Berbasis WebAssembly &amp; Microservices.',
                    '---',
                    '<strong>2025 &middot; Cendekia Vol.5 No.4</strong>',
                    'Implementasi Arsitektur Microservice pada Bank Sampah Digital.'
                ]
            },
            rightCol: {
                subtitle: 'Tentang Pendiri',
                lines: [
                    'Dipimpin oleh <strong>Wawan Sismadi, M.Kom.</strong>, Dosen Tetap Universitas IPWIJA dan saat ini menempuh studi <strong>Doktor (S3) Informatika</strong> di UAD (mulai 2025).',
                    '&bull; NIB: 2906220081075 (PMDN)',
                    '&bull; Asesor Kompetensi BNSP &mdash; Mobile &amp; Web Programming',
                    '&bull; SINTA Score: 259 &middot; SINTA ID: 6848496'
                ]
            }
        }
    ],

    profile: [
        {
            section: 'titleHero',
            title: 'Company Profile'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Legalitas & Identitas',
                lines: [
                    '** PT Sismadi Langit Solusi',
                    'NIB: 2906220081075',
                    'Status: PT Perorangan (PMDN)',
                    'Skala: Usaha Mikro',
                    '---',
                    'Alamat: Jakarta Timur 13780'
                ]
            },
            rightCol: {
                subtitle: 'Tentang Perusahaan',
                lines: [
                    'Didirikan oleh Wawan Sismadi, M.Kom.',
                    '---',
                    '<strong>PT Sismadi Langit Solusi</strong> adalah perusahaan teknologi informasi berbasis di Jakarta Timur yang bergerak dalam konsultasi TI, pengembangan perangkat lunak, dan keamanan informasi.',
                    'Perusahaan telah terlibat dalam proyek transformasi digital di lembaga pemerintah, termasuk Kementerian PUPR dan Kementerian Perindustrian.',
                    '---',
                    '## Visi',
                    'Menjadi mitra teknologi terpercaya yang menghadirkan solusi inovatif, aman, dan berkelanjutan.',
                    '## Misi',
                    '&bull; Membangun solusi zero-dependency berbasis open source.',
                    '&bull; Mendukung transformasi digital industri dan lembaga nasional.',
                    '&bull; Mencetak SDM TI kompeten melalui pelatihan berbasis kompetensi.'
                ]
            }
        }
    ],

    'expertise': [
        { section: 'titleHero', title: 'Our Expertise' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Wawan Sismadi',
                lines: [
                    'M.Kom. &middot; Kandidat Doktor Informatika (UAD)',
                    '---',
                    '** 2025/2026 &mdash; sekarang',
                    'Mahasiswa S3 Informatika &mdash; Universitas Ahmad Dahlan',
                    '** 2018 &mdash; 2020',
                    'S2 Ilmu Komputer (M.Kom.) &mdash; Universitas Budi Luhur',
                    '** 2022 &mdash; sekarang',
                    'Pendiri &amp; Direktur &mdash; PT Sismadi Langit Solusi',
                    '** Aktif',
                    'Dosen Tetap &mdash; Universitas IPWIJA',
                    '** Aktif',
                    'Konsultan TI &mdash; Kementerian PUPR &amp; Kemenperin',
                    '---',
                    'badge:IT Consultant', 'badge:Asesor BNSP', 'badge:Dosen', 'badge:Peneliti', 'badge:Open Source Dev'
                ]
            },
            rightCol: {
                subtitle: 'Kepakaran Profesional',
                lines: [
                    'Wawan Sismadi adalah dosen, developer, dan konsultan TI yang memadukan riset akademis dengan pengalaman industri nyata.',
                    '---',
                    '### Keahlian Teknis:',
                    'skill:Web Development (JS / DonatJS):95',
                    'skill:Database Management:88',
                    'skill:Cybersecurity:85',
                    'skill:IoT &amp; Automasi (ESP32):80',
                    'skill:Microservices &amp; API:82',
                    '---',
                    '### Inovasi Open Source:',
                    '&bull; <strong>DonatJS</strong> &mdash; MVC framework ringan, modular, zero-dependency.',
                    '&bull; <strong>BayamJS</strong> &amp; <strong>KtuPad</strong> &mdash; tools pendukung ekosistem DonatJS.',
                    '&bull; <strong>Wafel (wafel.id)</strong> &mdash; platform template web akselerasi UI.'
                ]
            }
        }
    ],

    'solutions': [
        { section: 'titleHero', title: 'Layanan & Solusi' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'KBLI Terdaftar',
                lines: [
                    '** 62019', 'Pemrograman Komputer Lainnya',
                    '** 63122', 'Portal Web &amp; Platform Digital',
                    '** 85492', 'Jasa Pendidikan Komputer Swasta',
                    '** 58110', 'Penerbitan Buku',
                    '** 47411', 'Perdagangan Eceran Komputer Dan Perlengkapannya',
                    '---',
                    'badge:62019', 'badge:63122', 'badge:85492', 'badge:58110', 'badge:47411'
                ]
            },
            rightCol: {
                subtitle: 'Paket Solusi',
                lines: [
                    'Berbagai paket layanan mulai dari konsultasi hingga pengembangan enterprise berbasis framework DonatJS.',
                    'table:solutions_pricing',
                    '---',
                    'Hubungi kami untuk konsultasi kebutuhan dan estimasi proyek.'
                ],
                table: [
                    { 'Kategori': 'Web Portal', 'Layanan': 'Custom CMS / Landing Page', 'Teknologi': 'DonatJS Static' },
                    { 'Kategori': 'Enterprise', 'Layanan': 'Sistem Informasi Terintegrasi', 'Teknologi': 'MVC / Microservices' },
                    { 'Kategori': 'E-Learning', 'Layanan': 'Learning Management System', 'Teknologi': 'JSON-Driven Portal' },
                    { 'Kategori': 'Consultancy', 'Layanan': 'IT Audit &amp; Security', 'Teknologi': 'ISO 27001 Standard' }
                ]
            }
        }
    ],

    'press': [
        { section: 'titleHero', title: 'PT Sismadi Langit Solusi' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Publikasi Ilmiah',
                lines: [
                    '** 2026 &middot; EDUTECH Vol.6', 'Presensi Daring Berbasis WebAssembly &amp; Microservices',
                    '** 2025 &middot; Cendekia Vol.5', 'Implementasi Microservice Bank Sampah Digital',
                    '---',
                    'SINTA Score: 259 &middot; SINTA ID: 6848496'
                ]
            },
            rightCol: {
                subtitle: 'Penerbitan Buku',
                lines: [
                    'Melayani jasa penerbitan buku referensi teknologi (KBLI 58110).',
                    '&bull; Buku Ajar &amp; Referensi TIK',
                    '&bull; Jurnal RETAS &amp; GATRA',
                    '---',
                    '### Open Source',
                    'badge:DonatJS', 'badge:BayamJS', 'badge:KtuPad', 'badge:IoT ESP32'
                ]
            }
        }
    ],

    'order': [
        { section: 'titleHero', title: 'Pemesanan Layanan' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Prosedur',
                lines: [
                    'step:Langkah 1:Pilih &amp; Isi Form:Tentukan layanan di formulir kanan.',
                    'step:Langkah 2:Konsultasi:Tim kami menghubungi Anda via WA/Email.',
                    'step:Langkah 3:Kontrak:Kesepakatan dituangkan dalam MoU formal.',
                    'step:Langkah 4:Bayar:<strong>BCA: 6280360048</strong> a.n. Wawan Sismadi',
                    'step:Langkah 5:Eksekusi:Pekerjaan dimulai sesuai jadwal.'
                ]
            },
            rightCol: {
                subtitle: 'Formulir Order',
                lines: ['form:order'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama / Instansi', placeholder: 'Nama Anda' },
                    { type: 'email', name: 'kontak', label: 'WA / Email', placeholder: '08xx / email@domain.com' },
                    {
                        type: 'select',
                        name: 'layanan',
                        label: 'Layanan',
                        options: ['Pengembangan Web (DonatJS)', 'Cybersecurity Audit', 'Penerbitan Buku ISBN', 'Pelatihan Kompetensi TI']
                    },
                    { type: 'textarea', name: 'pesan', label: 'Detail Kebutuhan', rows: 4 }
                ]
            }
        }
    ],

    'contact': [
        {
            section: 'titleHero',
            title: 'Hubungi Kami'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Info Kontak',
                lines: [
                    'contact:di-whatsapp:WA / Telepon:0878-8507-3237:https://wa.me/6287885073237',
                    'contact:di-envelope:Email:wawan@sismadi.co.id:mailto:wawan@sismadi.co.id',
                    'contact:di-geo:Alamat:Jakarta Timur 13780',
                    'contact:di-linkedin:LinkedIn:linkedin.com/in/sismadi:https://linkedin.com/in/sismadi',
                    'contact:di-github:GitHub:github.com/sismadi:https://github.com/sismadi',
                    '---',
                    '### Jam Operasional:',
                    'Senin &ndash; Jumat: 08.00 &ndash; 17.00 WIB',
                    'Sabtu: 09.00 &ndash; 13.00 WIB'
                ]
            },
            rightCol: {
                subtitle: 'Kirim Pesan',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi Sistem' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Apa yang bisa kami bantu?' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ]

};
