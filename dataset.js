

const pages ={

home:[
    {
        section: 'hero',
        title: 'PT Sismadi<br>Langit Solusi',
        tagline: 'Expertise Delivered Personally',
        description: 'Menjembatani rigor akademis dengan kebutuhan industri melalui solusi teknologi Web, Cybersecurity, IoT, dan AI yang efisien, aman, dan berkelanjutan.',
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
                title: 'Sismadi Press',
                content: 'Penerbitan buku teknologi ber-<strong>ISBN</strong> dan pengelolaan jurnal ilmiah <strong>RETAS & GATRA</strong> sebagai kontribusi aktif riset TI.',
                linkText: '+ Detail Publikasi',
                linkTarget: 'press'
            },
            {
                icon: 'di-person',
                title: 'IT Academy',
                content: 'Pelatihan & sertifikasi kompetensi <strong>BNSP</strong> bidang Mobile & Web Programming. Workshop microservices dan IoT.',
                linkText: '+ Detail Pelatihan',
                linkTarget: 'solutions'
            }
        ]
    },
    // Komponen article yang sudah kita buat sebelumnya untuk seksi publikasi
    {
        section: 'article',
        title: 'Berita & Publikasi',
        layout: 'split',
        leftCol: {
            subtitle: 'Publikasi Ilmiah Terbaru',
            lines: [
                '<strong>2026 &middot; EDUTECH Vol.6 No.2</strong>',
                'Penerapan Presensi Daring Berbasis WebAssembly & Microservices.',
                '---',
                '<strong>2025 &middot; Cendekia Vol.5 No.4</strong>',
                'Implementasi Arsitektur Microservice pada Bank Sampah Digital.'
            ]
        },
        rightCol: {
            subtitle: 'Scholar-Entrepreneur & Solution Architect',
            lines: [
                'Dipimpin oleh <strong>Wawan Sismadi, M.Kom.</strong>, saat ini menempuh studi <strong>Doktor (S3) Informatika</strong> di UAD.',
                '• NIB: 2906220081075 (PMDN)',
                '• Asesor BNSP Mobile & Web Programming',
                '• Peneliti SINTA Score: 275'
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
              // Gunakan array untuk baris agar lebih mudah dibaca
              lines: [
                  '** PT Sismadi Langit Solusi',
                  'NIB: 2906220081075',
                  'Status: PT Perorangan (PMDN)',
                  'Skala: Usaha Mikro',
                  '---', // Kode khusus untuk <hr>
                  'Alamat: Jakarta Timur 13780'
              ]
          },
          rightCol: {
              subtitle: 'Tentang Perusahaan',
              lines: [
                  'Didirikan oleh Wawan Sismadi, M.Kom.',
                  '---',
                  '<strong>PT Sismadi Langit Solusi</strong> adalah perusahaan teknologi informasi berbasis di Jakarta Timur yang bergerak dalam konsultasi TI, pengembangan perangkat lunak, dan keamanan informasi.',
                  'Dengan pengalaman lebih dari 15 tahun di bidang rekayasa perangkat lunak, perusahaan telah terlibat dalam proyek transformasi digital di lembaga pemerintah.',
                  '---',
                  '## Visi', // Kode khusus untuk judul kecil
                  'Menjadi mitra teknologi terpercaya yang menghadirkan solusi inovatif, aman, dan berkelanjutan.',
                  '## Misi',
                  '• Membangun solusi zero-dependency.',
                  '• Mendukung transformasi digital industri nasional.',
                  '• Mencetak SDM TI kompeten melalui pelatihan BNSP.'
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
                    'M.Kom. &middot; S3 Informatika (UAD)',
                    '---',
                    '** 2025/2026 — sekarang',
                    'Mahasiswa S3 Informatika (UAD)',
                    '** 2018 – 2020',
                    'Magister Komputer (M.Kom.) - Budi Luhur',
                    '** 2022 — sekarang',
                    'Pendiri & Direktur SLS',
                    '** Aktif',
                    'Dosen Universitas IPWIJA',
                    '** Aktif',
                    'Konsultan Kementerian',
                    '---',
                    'badge:Solution Architect', 'badge:IT Consultant', 'badge:Asesor BNSP', 'badge:Dosen', 'badge:Peneliti'
                ]
            },
            rightCol: {
                subtitle: 'Kepakaran Profesional',
                lines: [
                    'Wawan Sismadi adalah seorang <em>Scholar-Entrepreneur</em> yang memadukan kedalaman riset akademis dengan pengalaman industri nyata.',
                    '---',
                    '### Keahlian Teknis:',
                    'skill:Arsitektur & Web:95',
                    'skill:Database Management:90',
                    'skill:Cybersecurity:88',
                    'skill:IoT & Automasi:85',
                    'skill:AI & Machine Learning:82',
                    '---',
                    '### Inovasi Unggulan:',
                    '• <strong>DonatJS Framework</strong> — JS MVC ringan, modular, zero-dependency.',
                    '• <strong>Wafel (wafel.id)</strong> — Platform template web akselerasi UI.'
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
                    '** 63122', 'Portal Web & Platform Digital',
                    '** 85492', 'Jasa Pendidikan Komputer Swasta',
                    '** 58110', 'Penerbitan Buku',
                    '** 47411', 'Perdagangan Eceran Komputer Dan Perlengkapannya',

                    '---',
                    'badge:62019','badge:63122','badge:85492','badge:58110','badge:47411'

                ]
            },
            rightCol: {
                subtitle: 'Paket Solusi',
                // Semua baris (sebelum dan sesudah tabel) digabung di sini
                lines: [
                    'Sistem kami menyediakan berbagai paket layanan mulai dari konsultasi hingga pengembangan enterprise dengan basis framework DonatJS.',
                    'table:solutions_pricing', // Ini akan memicu render properti .table di bawah
                    '---',
                    '## Baris tambahan setelah table',
                    'Baris lainnya untuk informasi penutup.'
                ],
                // Data Tabel ditempel langsung di sini
                table: [
                    {
                        'Kategori': 'Web Portal',
                        'Layanan': 'Custom CMS / Landing Page',
                        'Teknologi': 'DonatJS Static'
                    },
                    {
                        'Kategori': 'Enterprise',
                        'Layanan': 'Sistem Informasi Terintegrasi',
                        'Teknologi': 'MVC / Microservices'
                    },
                    {
                        'Kategori': 'E-Learning',
                        'Layanan': 'Learning Management System',
                        'Teknologi': 'JSON-Driven Portal'
                    },
                    {
                        'Kategori': 'Consultancy',
                        'Layanan': 'IT Audit & Security',
                        'Teknologi': 'ISO 27001 Standard'
                    }
                ]
            }
        }
    ],


    'press': [
        { section: 'titleHero', title: 'Sismadi Press' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Publikasi Ilmiah',
                lines: [
                    '** 2026 · EDUTECH Vol.6', 'Presensi Daring Berbasis WebAssembly',
                    '** 2025 · Cendekia Vol.5', 'Implementasi Microservice Bank Sampah',
                    '---',
                    'SINTA Score: 275 · H-Index: 3'
                ]
            },
            rightCol: {
                subtitle: 'Penerbitan Buku',
                lines: [
                    'Melayani jasa penerbitan buku referensi teknologi ber-ISBN (KBLI 58110).',
                    '• Buku Ajar & Referensi TIK',
                    '• Jurnal RETAS & GATRA',
                    '---',
                    '### Open Source',
                    '',
                    'badge:DonatJS', 'badge:Microservices', 'badge:WebAssembly', 'badge:IoT ESP32'
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
                  'step:Langkah 1:Pilih & Isi Form:Tentukan layanan di formulir kanan.',
                  'step:Langkah 2:Konsultasi:Tim kami menghubungi Anda via WA/Email.',
                  'step:Langkah 3:Kontrak:Kesepakatan dituangkan dalam MoU formal.',
                  'step:Langkah 4:Bayar:<strong>BCA: 6280360048</strong> a.n. Wawan Sismadi',
                  'step:Langkah 5:Eksekusi:Pekerjaan dimulai sesuai jadwal.'
              ]
          },
          rightCol: {
              subtitle: 'Formulir Order',
              lines: ['form:order'], // Trigger untuk merender form
              // Data fields diletakkan di sini agar ditarik oleh komponen form
              fields: [
                  { type: 'text', name: 'nama', label: 'Nama / Instansi', placeholder: 'Nama Anda' },
                  { type: 'email', name: 'kontak', label: 'WA / Email', placeholder: '08xx / email@domain.com' },
                  {
                      type: 'select',
                      name: 'layanan',
                      label: 'Layanan',
                      options: ['Pengembangan Web (DonatJS)', 'Cybersecurity Audit', 'Penerbitan Buku ISBN', 'Sertifikasi BNSP']
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
                'Senin – Jumat: 08.00 – 17.00 WIB',
                'Sabtu: 09.00 – 13.00 WIB'
            ]
        },
        rightCol: {
            subtitle: 'Kirim Pesan',
            lines: ['form:contact'], // Trigger render form kontak
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

}
