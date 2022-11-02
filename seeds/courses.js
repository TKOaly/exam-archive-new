exports.seed = function (knex) {
  if (process.env.NODE_ENV !== 'development') {
    console.error(
      'Not running seeds when not in dev. This would truncate the table!'
    )
    return
  }

  return knex('courses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {
          id: '71',
          name: 'Ohjelmistotekniikan menetelmät',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:38.57588+00'
        },
        {
          id: '73',
          name: 'Ohjelmoinnin jatkokurssi',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:44.773327+00'
        },
        {
          id: '74',
          name: 'Ohjelmoinnin perusteet',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:48.566601+00'
        },
        {
          id: '75',
          name: 'Ohjelmointikielten periaatteet',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:53.279732+00'
        },
        {
          id: '76',
          name: 'Ohjelmointitekniikka C++',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:59.036468+00'
        },
        {
          id: '77',
          name: 'Ohjelmointitekniikka JavaScript',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:21:03.5475+00'
        },
        {
          id: '78',
          name: 'Ohjelmointitekniikka Scala',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:21:07.646174+00'
        },
        {
          id: '79',
          name: 'Operating Systems',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:21:22.121189+00'
        },
        {
          id: '80',
          name: 'Overlay and P2P Networks',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:21:31.295618+00'
        },
        {
          id: '81',
          name: 'Palveluperustaisten liiketoimintaprosessien suunnittelu ja toteuttaminen',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:21:59.03094+00'
        },
        {
          id: '82',
          name: 'Probabilistic Models',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:03.37942+00'
        },
        {
          id: '17',
          name: 'Compilers',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '18',
          name: 'Computability',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '83',
          name: 'Programming in Scala',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:09.452268+00'
        },
        {
          id: '84',
          name: 'Raja-arvot',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:14.531495+00'
        },
        {
          id: '85',
          name: 'Randomized Algorithms I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:19.852977+00'
        },
        {
          id: '86',
          name: 'Randomized Algorithms II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:26.046807+00'
        },
        {
          id: '87',
          name: 'Rinnakkaislaskenta grafiikkasuorittimilla',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:31.021263+00'
        },
        {
          id: '90',
          name: 'Satisfiability, Boolean Modeling and Computation',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:39.917729+00'
        },
        {
          id: '91',
          name: 'Semantic Web',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:43.436643+00'
        },
        {
          id: '92',
          name: 'Service Ecosystems',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:49.571381+00'
        },
        {
          id: '93',
          name: 'Service-oriented Software Engineering',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:22:57.220038+00'
        },
        {
          id: '28',
          name: 'Differentiaalilaskenta',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '95',
          name: 'Software Architectures',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:23:05.710123+00'
        },
        {
          id: '98',
          name: 'Software Design C',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:23:17.06964+00'
        },
        {
          id: '96',
          name: 'Software Measurement and Quality Modeling',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:23:28.019372+00'
        },
        {
          id: '97',
          name: 'Software Process Definition and Management',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:13.022729+00'
        },
        {
          id: '94',
          name: 'Software Product Management',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:19.121302+00'
        },
        {
          id: '99',
          name: 'String Processing Algorithms',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:25.277983+00'
        },
        {
          id: '100',
          name: 'Supervised Machine Learning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:31.676096+00'
        },
        {
          id: '101',
          name: 'Tiedonhakumenetelmät',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:40.41417+00'
        },
        {
          id: '37',
          name: 'Integraalilaskenta',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '102',
          name: 'Tietokannan suunnittelu',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:49.717418+00'
        },
        {
          id: '103',
          name: 'Tietokantojen perusteet',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:26:55.69019+00'
        },
        {
          id: '104',
          name: 'Tietokoneen rakenne',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:01.786106+00'
        },
        {
          id: '105',
          name: 'Tietokoneen toiminta',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:07.263576+00'
        },
        {
          id: '106',
          name: 'Tietoliikenteen perusteet',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:14.653639+00'
        },
        {
          id: '65',
          name: 'Ohjelmistoarkkitehtuurit',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '109',
          name: 'Tietoturvan perusteet',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:26.921753+00'
        },
        {
          id: '111',
          name: 'Tilastollinen päättely I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:33.930413+00'
        },
        {
          id: '72',
          name: 'Ohjelmistotuotanto',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '88',
          name: 'Rinnakkaisohjelmointi',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '89',
          name: 'Sarjat',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '107',
          name: 'Tietorakenteet',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '110',
          name: 'Tietovarastot',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '114',
          name: 'Topologia',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '2',
          name: 'Ääreisulotteinen lineaarialgebra',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-07-28 21:06:12.803221+00'
        },
        {
          id: '7',
          name: 'Algorithms and Systems for Big Data Management',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:15:47.097853+00'
        },
        {
          id: '9',
          name: 'Algorithms in Molecular Biology',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:15:58.185989+00'
        },
        {
          id: '8',
          name: 'Algorithms for Bioinformatics',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:07.350366+00'
        },
        {
          id: '10',
          name: 'Analyysi I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:15.691647+00'
        },
        {
          id: '55',
          name: 'Laskennan mallit',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 14:34:03.566422+00'
        },
        {
          id: '40',
          name: 'Introduction to Big Data Management',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:04.75712+00'
        },
        {
          id: '41',
          name: 'Introduction to Computational Creativity',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:12.70378+00'
        },
        {
          id: '42',
          name: 'Introduction to Computer Security',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:21.004048+00'
        },
        {
          id: '43',
          name: 'Introduction to Game Programming',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:27.764166+00'
        },
        {
          id: '44',
          name: 'Introduction to Machine Learning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:35.94362+00'
        },
        {
          id: '45',
          name: 'Introduction to Programming',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:41.352647+00'
        },
        {
          id: '48',
          name: 'Johdatus logiikkaan I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:49.953118+00'
        },
        {
          id: '49',
          name: 'Johdatus logiikkaan II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:15:55.90255+00'
        },
        {
          id: '112',
          name: 'Todennäköisyyslaskenta',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:44.082103+00'
        },
        {
          id: '113',
          name: 'Todennäköisyyslaskenta II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:51.189947+00'
        },
        {
          id: '52',
          name: 'Johdatus yliopistomatematiikkaan',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:16:08.322018+00'
        },
        {
          id: '115',
          name: 'Transaction Management and Query Optimization',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:27:56.911991+00'
        },
        {
          id: '116',
          name: 'Transaktioiden hallinta',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:00.973296+00'
        },
        {
          id: '56',
          name: 'Learning Markov Random Fields and Models of Statistical Physics from Data',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:17:04.029547+00'
        },
        {
          id: '126',
          name: 'Introduction to Artificial Intelligence',
          created_at: '2020-10-15 14:55:44.730396+00'
        },
        {
          id: '58',
          name: 'Lineaarialgebra ja matriisilaskenta I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:17:16.882601+00'
        },
        {
          id: '59',
          name: 'Linux-ylläpito',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:17:26.858457+00'
        },
        {
          id: '108',
          name: 'Tietorakenteet ja algoritmit',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2021-04-06 07:32:43.497278+00'
        },
        {
          id: '50',
          name: 'Johdatus tekoälyyn',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:17:50.941082+00'
        },
        {
          id: '51',
          name: 'Johdatus todennäköisyyslaskentaan',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:18:00.08917+00'
        },
        {
          id: '60',
          name: 'Logiikka I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:18:15.043734+00'
        },
        {
          id: '61',
          name: 'Matematiikka muut',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:19:11.051265+00'
        },
        {
          id: '62',
          name: 'Methods for Software Engineering',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:19:38.144737+00'
        },
        {
          id: '63',
          name: 'Mobile Middleware',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:19:41.98678+00'
        },
        {
          id: '64',
          name: 'Network Programming',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:19:47.9868+00'
        },
        {
          id: '66',
          name: 'Ohjelmistojen suorituskyvyn suunnittelu',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:19:55.655484+00'
        },
        {
          id: '67',
          name: 'Ohjelmistojen testaus',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:04.501637+00'
        },
        {
          id: '127',
          name: 'Introduction to Specification and Verification',
          created_at: '2020-11-18 12:47:13.514359+00'
        },
        {
          id: '128',
          name: 'Introduction to Category Theory',
          created_at: '2020-11-18 12:55:50.439962+00'
        },
        {
          id: '129',
          name: 'Probability Theory II',
          created_at: '2020-11-18 12:57:09.950299+00'
        },
        {
          id: '130',
          name: 'Statistical Data Science',
          created_at: '2020-11-18 12:57:43.160518+00'
        },
        {
          id: '131',
          name: 'Tähtitieteen perusteet I',
          created_at: '2020-11-18 12:58:17.80554+00'
        },
        {
          id: '53',
          name: 'Käyttöjärjestelmät',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2021-03-28 08:59:33.568983+00'
        },
        {
          id: '54',
          name: 'Käyttöjärjestelmät (pre-2013)',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2021-03-28 08:59:45.152419+00'
        },
        {
          id: '132',
          name: 'Probability theory',
          created_at: '2021-09-27 13:06:33.770907+00'
        },
        {
          id: '118',
          name: 'Verkot',
          created_at: '2020-07-28 20:33:33.945865+00'
        },
        {
          id: '1',
          name: 'Ääreisulotteinen lineaarialgebra',
          created_at: '2020-07-28 19:31:44.40266+00',
          updated_at: '2020-07-28 20:39:42.33346+00',
          removed_at: '2020-07-28 20:39:42.33346+00'
        },
        {
          id: '3',
          name: 'Advanced Course in Machine Learning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-07-28 21:06:27.2189+00'
        },
        {
          id: '4',
          name: 'Advanced course in programming',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-07-28 21:06:32.760554+00'
        },
        {
          id: '5',
          name: 'Algebra I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-07-28 21:06:36.311555+00'
        },
        {
          id: '6',
          name: 'Algebraaliset rakenteet II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-07-28 21:06:43.46163+00'
        },
        {
          id: '124',
          name: '"\' OR 1=1; --',
          created_at: '2020-07-28 21:06:55.07545+00',
          updated_at: '2020-07-28 21:06:59.221984+00',
          removed_at: '2020-07-28 21:06:59.221984+00'
        },
        {
          id: '125',
          name: '<img src="x" onerror="alert(\'xss\')" />',
          created_at: '2020-07-28 21:07:22.260192+00',
          updated_at: '2020-07-28 21:07:26.568242+00',
          removed_at: '2020-07-28 21:07:26.568242+00'
        },
        {
          id: '11',
          name: 'Analyysi II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:22.670137+00'
        },
        {
          id: '12',
          name: 'Approximation Algorithms',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:29.431569+00'
        },
        {
          id: '13',
          name: 'Automated Logical Reasoning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:38.765251+00'
        },
        {
          id: '14',
          name: 'Big Data Frameworks',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:16:47.890281+00'
        },
        {
          id: '15',
          name: 'Biological Sequence Analysis',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:17:14.32134+00'
        },
        {
          id: '16',
          name: 'C-ohjelmointi',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:17:23.062506+00'
        },
        {
          id: '19',
          name: 'Computer Organization I',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:17:36.033979+00'
        },
        {
          id: '20',
          name: 'Cryptography and Network Security',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:17:46.297152+00'
        },
        {
          id: '21',
          name: 'Cryptography in Networking',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:17:55.220169+00'
        },
        {
          id: '22',
          name: 'Data Compression Techniques',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:18:03.750803+00'
        },
        {
          id: '23',
          name: 'Data Mining',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:18:09.274887+00'
        },
        {
          id: '24',
          name: 'Data Structures and Algorithms',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:18:22.596054+00'
        },
        {
          id: '25',
          name: 'Deep Learning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:18:31.348795+00'
        },
        {
          id: '26',
          name: 'Design and Analysis of Algorithms',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:18:50.97136+00'
        },
        {
          id: '27',
          name: 'Deterministic Distributed Algoritms',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:00.411716+00'
        },
        {
          id: '29',
          name: 'Distributed Data Infrastructures',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:09.655137+00'
        },
        {
          id: '30',
          name: 'Distributed Systems',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:15.898863+00'
        },
        {
          id: '31',
          name: 'Game Engine Architecture',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:24.443598+00'
        },
        {
          id: '32',
          name: 'Hajautetut tietokannat',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:31.964094+00'
        },
        {
          id: '33',
          name: 'Health Informatics',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:19:36.994253+00'
        },
        {
          id: '34',
          name: 'Human Computer Interaction',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:21:25.210289+00'
        },
        {
          id: '35',
          name: 'Information Retrieval',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:21:54.9506+00'
        },
        {
          id: '36',
          name: 'Information Theoretic Modeling',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:22:03.176216+00'
        },
        {
          id: '38',
          name: 'Interactive Data Visualization',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:22:10.151396+00'
        },
        {
          id: '39',
          name: 'Internet Protocols',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:22:15.74927+00'
        },
        {
          id: '46',
          name: 'Introductiontobigdatamanagement',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:23:10.336876+00',
          removed_at: '2020-08-01 16:23:10.336876+00'
        },
        {
          id: '47',
          name: 'Inverse Problems 1',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:23:24.368408+00'
        },
        {
          id: '57',
          name: 'Lineaarialgebra ja matriisilaskenta II',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:23:41.69882+00'
        },
        {
          id: '123',
          name: 'XML-metakieli',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-08-01 16:24:06.426071+00'
        },
        {
          id: '68',
          name: 'Ohjelmistojen vaatimusmäärittely',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:11.144927+00'
        },
        {
          id: '69',
          name: 'Ohjelmistoprojektien johtaminen ja ryhmädynamiikka',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:22.754877+00'
        },
        {
          id: '70',
          name: 'Ohjelmistoprosessit ja ohjelmistojen laatu',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:20:32.218673+00'
        },
        {
          id: '117',
          name: 'Unsupervised Machine Learning',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:05.166987+00'
        },
        {
          id: '119',
          name: 'Web-palvelinohjelmointi',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:13.362349+00'
        },
        {
          id: '120',
          name: 'Web-palvelinohjelmointi Ruby on Rails',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:20.194957+00'
        },
        {
          id: '121',
          name: 'Web-selainohjelmointi',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:27.2443+00'
        },
        {
          id: '122',
          name: 'Web server programming Ruby on Rails',
          created_at: '2020-07-28 20:33:33.945865+00',
          updated_at: '2020-09-28 15:28:32.431649+00'
        }
      ])
    })
}
