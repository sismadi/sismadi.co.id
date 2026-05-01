const pages = {

    home: [
        {
            section: 'hero',
            title: 'PT Sismadi<br>Langit Solusi',
            tagline: 'Solusi Teknologi. Tercatat Resmi.',
            description: 'Perusahaan teknologi informasi Jakarta Timur — pengembangan perangkat lunak, portal web, penerbitan buku, dan pelatihan TI. Terdaftar resmi sejak 2022.',
            imgClass: 'di-sls',
            badges: ['NIB 2906220081075', 'PMDN', 'Jakarta Timur', 'Asesor BNSP'],
            cta: { text: 'Lihat Layanan &raquo;', link: 'layanan' }
        },

        {
            section: 'features',
            items: [
                {
                    icon: 'di-save',
                    title: 'Software Development',
                    content: 'Pengembangan sistem dan portal web berbasis <strong>DonatJS MVC Framework</strong> — modular, tanpa dependensi eksternal, disesuaikan dengan kebutuhan bisnis.',
                    linkText: '+ Detail Layanan',
                    linkTarget: 'layanan'
                },
                {
                    icon: 'di-file',
                    title: 'Penerbitan Buku',
                    content: 'Penerbitan buku referensi teknologi informasi. Terdaftar resmi KBLI 58110 dengan Sertifikat Standar OSS.',
                    linkText: '+ Katalog Terbitan',
                    linkTarget: 'press'
                },
                {
                    icon: 'di-edu',
                    title: 'Pelatihan TI',
                    content: 'Kursus pemrograman web dan desain web berbasis skema kompetensi BNSP. Diselenggarakan melalui <strong>Sismadi Edu</strong>.',
                    linkText: '+ Sismadi Edu',
                    linkTarget: 'https://sismadi.sch.id'
                }
            ]
        },

        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Identitas Perusahaan',
                lines: [
                    '**Nama**: PT Sismadi Langit Solusi',
                    '**NIB**: 2906220081075',
                    '**AHU**: AHU-011266.AH.01.30.Tahun 2022',
                    '---',
                    '**Alamat**: Jakarta Timur 13780',
                    '**Telepon**: 0878-8507-3237',
                    '**Email**: wawan@sismadi.co.id'
                ]
            },
            rightCol: {
                subtitle: 'Tentang Perusahaan',
                lines: [
                    'PT Sismadi Langit Solusi didirikan pada <strong>24 Maret 2022</strong> dan tercatat sebagai badan hukum oleh Direktorat Jenderal Administrasi Hukum Umum, Kementerian Hukum dan HAM RI.',
                    '---',
                    'Dipimpin langsung oleh <strong>Wawan Sismadi, M.Kom.</strong> — dosen aktif Informatika, Asesor Kompetensi BNSP, dan pengembang DonatJS Framework.',
                    '---',
                    '## Visi',
                    'Menjadi mitra teknologi terpercaya yang menghadirkan solusi inovatif dan berkelanjutan.',
                    '## Misi',
                    '&bull; Membangun solusi perangkat lunak yang efisien dan terstandarisasi.',
                    '&bull; Mempublikasikan pengetahuan TI melalui buku dan jurnal ilmiah.',
                    '&bull; Mencetak SDM TI kompeten melalui pelatihan berbasis kompetensi.'
                ]
            }
        }
    ],

    legalitas: [
        {
            section: 'titleHero',
            title: 'Legalitas',
            description: 'Seluruh dokumen legalitas PT Sismadi Langit Solusi diterbitkan secara elektronik melalui sistem OSS Pemerintah RI dan Kementerian Hukum &amp; HAM RI.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Dokumen Badan Hukum',
                lines: [
                    '** Sertifikat Pendirian (AHU) **',
                    'No. AHU-011266.AH.01.30.Tahun 2022',
                    'Diterbitkan: 24 Maret 2022',
                    'Lembaga: Kementerian Hukum dan HAM RI',
                    'KBLI Utama: 62019 (Aktivitas Pemrograman Komputer Lainnya)',
                ]
            },
            rightCol: {
                subtitle: 'Nomor Induk Berusaha (NIB)',
                lines: [
                    '** NIB: 2906220081075 **',
                    'Diterbitkan: 29 Juni 2022',
                    'Perubahan ke-2: 29 Mei 2023',
                    'Lembaga: Kementerian Investasi / BKPM',
                    '---',
                    'NIB berlaku di seluruh wilayah Republik Indonesia selama perusahaan menjalankan kegiatan usaha.',
                    '---',
                    '** Sertifikat Standar Penerbitan Buku **',
                    'No. 29062200810750002',
                    'KBLI: 58110 — Penerbitan Buku',
                    'Diterbitkan: 16 September 2023',
                    'Pengawas: Kemendikbudristek'
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'KBLI Terdaftar',
                lines: [
                    'table:table'
                ],
                table: [
                    { 'Kode': '62019', 'Bidang Usaha': 'Aktivitas Pemrograman Komputer Lainnya' },
                    { 'Kode': '63122', 'Bidang Usaha': 'Portal Web dan/atau Platform Digital Komersial' },
                    { 'Kode': '47411', 'Bidang Usaha': 'Perdagangan Eceran Komputer dan Perlengkapannya' },
                    { 'Kode': '58110', 'Bidang Usaha': 'Penerbitan Buku' },
                    { 'Kode': '85492', 'Bidang Usaha': 'Jasa Pendidikan Komputer (TIK) Swasta' }
                ]
            },
            rightCol: {
                subtitle: 'Hak Kekayaan Intelektual',
                lines: [
                    'Seluruh produk perangkat lunak yang dikembangkan terdaftar sebagai Hak Cipta resmi di DJKI.',
                    '---',
                    'table:table'
                ],
                table: [
                    { 'Produk': 'DonatJS LMS', 'No. HKI': 'EC002026051501' },
                    { 'Produk': 'Aplikasi Bank Sampah Cinta', 'No. HKI': 'EC002025035655' },
                    { 'Produk': 'DonatJS', 'No. HKI': 'EC00202414144' },
                    { 'Produk': 'BayamJS', 'No. HKI': 'EC00202367008' },
                    { 'Produk': 'Ktupad MVC Framework', 'No. HKI': 'EC00202219047' },
                    { 'Produk': 'Ktupad', 'No. HKI': 'EC00201952487' }
                ]
            }
        }
    ],

    layanan: [
        {
            section: 'titleHero',
            title: 'Layanan',
            description: 'Layanan PT Sismadi Langit Solusi didasarkan pada KBLI yang terdaftar secara resmi — mencakup pengembangan perangkat lunak, portal web, penerbitan buku, dan pelatihan TI.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Pengembangan Perangkat Lunak',
                lines: [
                    '**KBLI 62019 &amp; 63122**',
                    '---',
                    'Pengembangan sistem informasi, web portal, dan platform digital berbasis framework internal <strong>DonatJS</strong>.',
                    '---',
                    'table:table'
                ],
                table: [
                    { 'Kategori': 'Web Portal', 'Contoh Layanan': 'Custom CMS / Landing Page' },
                    { 'Kategori': 'Sistem Informasi', 'Contoh Layanan': 'Aplikasi bisnis terintegrasi' },
                    { 'Kategori': 'LMS', 'Contoh Layanan': 'Platform e-learning DonatJS' },
                    { 'Kategori': 'Konsultasi TI', 'Contoh Layanan': 'Arsitektur sistem &amp; review teknis' }
                ]
            },
            rightCol: {
                subtitle: 'Penerbitan & Pelatihan',
                lines: [
                    '** Penerbitan Buku (KBLI 58110) **',
                    'Penerbitan buku referensi teknologi di bawah <strong>PT Sismadi Langit Solusi</strong>. Tersertifikasi Sertifikat Standar OSS No. 29062200810750002.',
                    '---',
                    '** Pelatihan TI (KBLI 85492) **',
                    'Kursus pemrograman berbasis skema kompetensi BNSP, diselenggarakan melalui <strong>Sismadi Edu</strong>. Program mencakup Pemrogram Web, Pemrogram Mobile, dan Desainer Web.',
                    'contact:di-web|Sismadi Edu|sismadi.sch.id|https://sismadi.sch.id',
                    '---',
                    '** Perdagangan Komputer (KBLI 47411) **',
                    'Perdagangan eceran komputer dan perlengkapannya.'
                ]
            }
        }
    ],

    press: [
        {
            section: 'titleHero',
            title: 'Penerbitan Buku',
            description: 'PT Sismadi Langit Solusi menerbitkan karya di bidang teknologi informasi — terdaftar resmi KBLI 58110 sejak 16 September 2023.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Fokus Penerbitan',
                lines: [
                    'Karya yang diterbitkan berfokus pada tiga bidang utama:',
                    '---',
                    '** Pengembangan Web **',
                    'Framework, arsitektur sistem, dan praktik pengembangan perangkat lunak modern.',
                    '---',
                    '** Desain &amp; Antarmuka **',
                    'SVG, CSS, dan standar desain antarmuka berbasis web.',
                    '---',
                    '** Teknologi Pendidikan **',
                    'Pemanfaatan teknologi informasi dalam konteks pembelajaran dan pendidikan tinggi.',
                    '---',
                    'Untuk informasi kerjasama penerbitan, hubungi kami melalui halaman kontak.',
                    'contact:di-envelope|Kontak Penerbitan|wawan@sismadi.co.id|mailto:wawan@sismadi.co.id'
                ]
            },
            rightCol: {
                subtitle: 'Terbitan Mendatang',
                lines: [
                    'table:table'
                ],
                table: [
                    { 'Judul': 'Membangun Aplikasi Web Modern dengan DonatJS', 'Status': 'Dalam penyusunan' },
                    { 'Judul': 'Arsitektur Zero-Dependency: Pendekatan Baru Pengembangan Web', 'Status': 'Dalam penyusunan' },
                    { 'Judul': 'Panduan Praktis Desain Web dengan SVG dan CSS Modern', 'Status': 'Dalam penyusunan' }
                ]
            }
        }
    ],

    order: [
        {
            section: 'titleHero',
            title: 'Pemesanan Layanan',
            description: 'Setiap proyek dimulai dengan konsultasi — bukan langsung invoice. Isi formulir, Tim kami menghubungi Anda dalam waktu 1 hari kerja.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Prosedur',
                lines: [
                    'step:Langkah 1:Isi Form:Lengkapi formulir di sisi kanan.',
                    'step:Langkah 2:Konsultasi:Tim kami menghubungi Anda via WA/Email dalam 1 hari kerja.',
                    'step:Langkah 3:Kontrak:Ruang lingkup dituangkan dalam MoU formal.',
                    'step:Langkah 4:Pembayaran:Informasi pembayaran dikirim setelah kontrak disepakati.',
                    'step:Langkah 5:Eksekusi:Pekerjaan dimulai sesuai jadwal yang disepakati.'
                ]
            },
            rightCol: {
                subtitle: 'Formulir Order',
                lines: ['form:order'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama / Instansi', placeholder: 'Nama Anda atau nama organisasi' },
                    { type: 'email', name: 'kontak', label: 'WA / Email', placeholder: '08xx atau email@domain.com' },
                    {
                        type: 'select',
                        name: 'layanan',
                        label: 'Layanan yang Dibutuhkan',
                        options: [
                            'Pengembangan Web / Portal (DonatJS)',
                            'Sistem Informasi Terintegrasi',
                            'Penerbitan Buku',
                            'Pelatihan Kompetensi TI',
                            'Konsultasi Arsitektur TI',
                            'Lainnya'
                        ]
                    },
                    { type: 'textarea', name: 'pesan', label: 'Detail Kebutuhan', rows: 4, placeholder: 'Ceritakan kebutuhan proyek Anda...' }
                ],
                submitText: 'Kirim Permintaan'
            }
        }
    ],

    contact: [
        {
            section: 'titleHero',
            title: 'Hubungi Kami',
            description: 'Tersedia via WhatsApp, email, atau formulir di bawah. Kami merespons pesan pada jam kerja. Untuk kebutuhan cepat, gunakan WhatsApp.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Info Kontak',
                lines: [
                    'contact:di-whatsapp|WA / Telepon|0878-8507-3237|https://wa.me/6287885073237',
                    'contact:di-envelope|Email|wawan@sismadi.co.id|mailto:wawan@sismadi.co.id',
                    'contact:di-web|Website|sismadi.co.id|https://sismadi.co.id',
                    'contact:di-linkedin|LinkedIn|linkedin.com/in/sismadi|https://linkedin.com/in/sismadi',
                    'contact:di-github|GitHub|github.com/sismadi|https://github.com/sismadi',
                    'contact:di-geo|Alamat| Jakarta Timur 13780',
                    '---',
                    '### Jam Operasional',
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
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi pengembangan sistem' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Apa yang bisa kami bantu?' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ]

};
