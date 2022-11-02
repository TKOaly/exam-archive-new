exports.seed = function (knex) {
  if (process.env.NODE_ENV !== 'development') {
    console.error(
      'Not running seeds when not in dev. This would truncate the table!'
    )
    return
  }

  // Deletes ALL existing entries
  return knex('exams')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('exams').insert([
        {
          id: '1964',
          course_id: '40',
          file_name: '181023_bigdatamgmt_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-08-01 16:22:53.355+00',
          created_at: '2020-08-01 16:22:53.355929+00'
        },
        {
          id: '1396',
          course_id: '46',
          file_name: '181023_bigdatamgmt_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-23 17:26:41.613+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2020-08-01 16:23:04.469967+00',
          removed_at: '2020-08-01 16:23:04.469967+00'
        },
        {
          id: '1966',
          course_id: '55',
          file_name: '191810_Laskennan_mallit_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-09-23 11:20:33.232+00',
          created_at: '2020-09-23 11:20:33.232837+00'
        },
        {
          id: '1967',
          course_id: '55',
          file_name: '192510_Laskennan_mallit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-09-23 11:21:51.143+00',
          created_at: '2020-09-23 11:21:51.144102+00'
        },
        {
          id: '1968',
          course_id: '55',
          file_name: '200928_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-09-28 14:35:24.189+00',
          created_at: '2020-09-28 14:35:24.190028+00'
        },
        {
          id: '1965',
          course_id: '55',
          file_name: '190930_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-09-23 11:18:44.35+00',
          created_at: '2020-09-23 11:18:44.351219+00',
          updated_at: '2020-09-28 15:13:15.543032+00',
          removed_at: '2020-09-28 15:13:15.543032+00'
        },
        {
          id: '1982',
          course_id: '5',
          file_name: '140507_Algebra_I_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:42:58.483+00',
          created_at: '2020-11-18 12:42:58.484544+00'
        },
        {
          id: '1983',
          course_id: '82',
          file_name: '140600_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:43:16.468+00',
          created_at: '2020-11-18 12:43:16.468905+00'
        },
        {
          id: '1984',
          course_id: '26',
          file_name: '140603_Design_and_Analysis_of_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:43:33.156+00',
          created_at: '2020-11-18 12:43:33.157071+00'
        },
        {
          id: '1985',
          course_id: '23',
          file_name: '140613_Data_Mining_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:44:10.749+00',
          created_at: '2020-11-18 12:44:10.749602+00'
        },
        {
          id: '1986',
          course_id: '78',
          file_name: '140613_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:44:24.689+00',
          created_at: '2020-11-18 12:44:24.690123+00'
        },
        {
          id: '1987',
          course_id: '82',
          file_name: '141100_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:44:39.681+00',
          created_at: '2020-11-18 12:44:39.681737+00'
        },
        {
          id: '1988',
          course_id: '117',
          file_name: '141121_Unsupervised_Machine_Learning.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:44:51.533+00',
          created_at: '2020-11-18 12:44:51.533869+00'
        },
        {
          id: '1989',
          course_id: '23',
          file_name: '141125_Data_Mining_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:45:03.701+00',
          created_at: '2020-11-18 12:45:03.70228+00'
        },
        {
          id: '1990',
          course_id: '72',
          file_name: '141125_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:45:15.421+00',
          created_at: '2020-11-18 12:45:15.421525+00'
        },
        {
          id: '1991',
          course_id: '100',
          file_name: '141128_Supervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:45:26.617+00',
          created_at: '2020-11-18 12:45:26.618348+00'
        },
        {
          id: '1992',
          course_id: '8',
          file_name: '141202_Algorithms_for_Bioinformatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:46:09.828+00',
          created_at: '2020-11-18 12:46:09.828568+00'
        },
        {
          id: '1993',
          course_id: '26',
          file_name: '141202_Design_and_Analysis_Algorithms_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:46:29.95+00',
          created_at: '2020-11-18 12:46:29.951052+00'
        },
        {
          id: '1994',
          course_id: '43',
          file_name: '141202_Introduction_to_Game_Programming.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:46:49.021+00',
          created_at: '2020-11-18 12:46:49.021402+00'
        },
        {
          id: '1995',
          course_id: '127',
          file_name:
            '141215_Introduction_to_Specification_and_Verification_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:47:21.015+00',
          created_at: '2020-11-18 12:47:21.015727+00'
        },
        {
          id: '1996',
          course_id: '108',
          file_name: '141215_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:47:45.7+00',
          created_at: '2020-11-18 12:47:45.701006+00'
        },
        {
          id: '1997',
          course_id: '34',
          file_name: '141216_Human_Computer_Interaction.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:48:04.352+00',
          created_at: '2020-11-18 12:48:04.354083+00'
        },
        {
          id: '1998',
          course_id: '44',
          file_name: '141217_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:48:16.6+00',
          created_at: '2020-11-18 12:48:16.601372+00'
        },
        {
          id: '1999',
          course_id: '36',
          file_name: '150123_Information_Theoretic_Modeling_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:48:31.636+00',
          created_at: '2020-11-18 12:48:31.636907+00'
        },
        {
          id: '2000',
          course_id: '39',
          file_name: '150123_Internet_Protocols.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:48:58.873+00',
          created_at: '2020-11-18 12:48:58.873544+00'
        },
        {
          id: '2001',
          course_id: '53',
          file_name: '150123_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:49:14.183+00',
          created_at: '2020-11-18 12:49:14.183405+00'
        },
        {
          id: '2002',
          course_id: '101',
          file_name: '150123_Tiedonhakumenetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:49:36.055+00',
          created_at: '2020-11-18 12:49:36.056559+00'
        },
        {
          id: '2003',
          course_id: '102',
          file_name: '150123_Tietokannan_suunnittelu.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:49:48.682+00',
          created_at: '2020-11-18 12:49:48.683218+00'
        },
        {
          id: '2004',
          course_id: '26',
          file_name: '150127_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:50:08.312+00',
          created_at: '2020-11-18 12:50:08.312814+00'
        },
        {
          id: '2005',
          course_id: '65',
          file_name: '150127_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:50:22.083+00',
          created_at: '2020-11-18 12:50:22.083817+00'
        },
        {
          id: '2006',
          course_id: '108',
          file_name: '150127_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:50:38.721+00',
          created_at: '2020-11-18 12:50:38.72178+00'
        },
        {
          id: '2007',
          course_id: '116',
          file_name: '150127_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:50:47.409+00',
          created_at: '2020-11-18 12:50:47.410143+00'
        },
        {
          id: '2008',
          course_id: '70',
          file_name: '150130_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:50:58.932+00',
          created_at: '2020-11-18 12:50:58.932802+00'
        },
        {
          id: '2009',
          course_id: '23',
          file_name: '150206_Data_Mining_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:51:11.314+00',
          created_at: '2020-11-18 12:51:11.3151+00'
        },
        {
          id: '2010',
          course_id: '127',
          file_name:
            '150206_Introduction_to_Specification_and_Verification.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:51:24.487+00',
          created_at: '2020-11-18 12:51:24.488265+00'
        },
        {
          id: '2011',
          course_id: '55',
          file_name: '150206_Laskennan_mallit_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:51:38.134+00',
          created_at: '2020-11-18 12:51:38.134943+00'
        },
        {
          id: '2012',
          course_id: '68',
          file_name: '150206_Ohjelmistojen_vaatimusmaarittely_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:51:48.104+00',
          created_at: '2020-11-18 12:51:48.104947+00'
        },
        {
          id: '2013',
          course_id: '71',
          file_name: '150206_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:52:01.564+00',
          created_at: '2020-11-18 12:52:01.565205+00'
        },
        {
          id: '2014',
          course_id: '99',
          file_name: '150206_String_Processing_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:52:14.349+00',
          created_at: '2020-11-18 12:52:14.349689+00'
        },
        {
          id: '2015',
          course_id: '43',
          file_name: '150227_Introduction_to_Game_Programming.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:52:33.318+00',
          created_at: '2020-11-18 12:52:33.318468+00'
        },
        {
          id: '2016',
          course_id: '22',
          file_name: '150305_Data_Compression_Techniques.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:52:45.134+00',
          created_at: '2020-11-18 12:52:45.138114+00'
        },
        {
          id: '2017',
          course_id: '64',
          file_name: '150305_Network_Programming.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:53:00.541+00',
          created_at: '2020-11-18 12:53:00.541415+00'
        },
        {
          id: '2018',
          course_id: '60',
          file_name: '150306_Logiikka_I_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:53:09.855+00',
          created_at: '2020-11-18 12:53:09.856608+00'
        },
        {
          id: '2019',
          course_id: '51',
          file_name: '150309_Johdatus_todennakoisyyslaskentaan_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:53:23.895+00',
          created_at: '2020-11-18 12:53:23.89609+00'
        },
        {
          id: '2020',
          course_id: '111',
          file_name: '150511_Johdatus_tilastolliseen_paattelyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:53:48.286+00',
          created_at: '2020-11-18 12:53:48.2872+00'
        },
        {
          id: '2021',
          course_id: '110',
          file_name: '150602_Tietovarastot.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:53:58.256+00',
          created_at: '2020-11-18 12:53:58.257494+00'
        },
        {
          id: '2022',
          course_id: '3',
          file_name: '160920_Advanced_Course_in_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:54:05.554+00',
          created_at: '2020-11-18 12:54:05.554555+00'
        },
        {
          id: '2023',
          course_id: '31',
          file_name: '160920_Game_Engine_Architecture_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:54:16.419+00',
          created_at: '2020-11-18 12:54:16.419789+00'
        },
        {
          id: '2024',
          course_id: '103',
          file_name: '160920_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:54:42.246+00',
          created_at: '2020-11-18 12:54:42.246856+00'
        },
        {
          id: '2025',
          course_id: '53',
          file_name: '180418_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:54:56.48+00',
          created_at: '2020-11-18 12:54:56.480735+00'
        },
        {
          id: '2026',
          course_id: '108',
          file_name: '180615_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:55:08.693+00',
          created_at: '2020-11-18 12:55:08.69407+00'
        },
        {
          id: '2027',
          course_id: '106',
          file_name: '180920_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:55:23.315+00',
          created_at: '2020-11-18 12:55:23.316092+00'
        },
        {
          id: '1969',
          course_id: '55',
          file_name: '190930_Laskennan_mallit_VK1_malli.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-09-28 15:13:02.888+00',
          created_at: '2020-09-28 15:13:02.890173+00'
        },
        {
          id: '2028',
          course_id: '30',
          file_name: '190000_Distributed_Systems_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:55:35.953+00',
          created_at: '2020-11-18 12:55:35.953526+00'
        },
        {
          id: '2029',
          course_id: '128',
          file_name: '190807_Introduction_to_Category_Theory_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:55:54.854+00',
          created_at: '2020-11-18 12:55:54.855134+00'
        },
        {
          id: '2030',
          course_id: '26',
          file_name: '191212_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:56:08.885+00',
          created_at: '2020-11-18 12:56:08.886513+00'
        },
        {
          id: '2031',
          course_id: '22',
          file_name: '191216_Data_Compression_Techniques.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:56:24.054+00',
          created_at: '2020-11-18 12:56:24.055203+00'
        },
        {
          id: '2032',
          course_id: '94',
          file_name: '191216_Software_Product_Management_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:56:36.071+00',
          created_at: '2020-11-18 12:56:36.07184+00'
        },
        {
          id: '2033',
          course_id: '44',
          file_name: '191217_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:56:48.618+00',
          created_at: '2020-11-18 12:56:48.618922+00'
        },
        {
          id: '2034',
          course_id: '75',
          file_name: '191217_Ohjelmointikielten_periaatteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:56:57.99+00',
          created_at: '2020-11-18 12:56:57.991023+00'
        },
        {
          id: '2035',
          course_id: '129',
          file_name: '191217_Probability_theory_II.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:57:14.154+00',
          created_at: '2020-11-18 12:57:14.15479+00'
        },
        {
          id: '2036',
          course_id: '49',
          file_name: '191219_Johdatus_logiikkaan_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:57:22.426+00',
          created_at: '2020-11-18 12:57:22.426592+00'
        },
        {
          id: '2037',
          course_id: '130',
          file_name: '191219_Statistical_Data_Science.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:57:47.281+00',
          created_at: '2020-11-18 12:57:47.281458+00'
        },
        {
          id: '2038',
          course_id: '95',
          file_name: '200122_Software_Architectures_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:57:57.432+00',
          created_at: '2020-11-18 12:57:57.432933+00'
        },
        {
          id: '2039',
          course_id: '22',
          file_name: '200129_Data_Compression_Techniques.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:58:04.335+00',
          created_at: '2020-11-18 12:58:04.335708+00'
        },
        {
          id: '2040',
          course_id: '131',
          file_name: '200304_Tahtitieteen_perusteet_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-11-18 12:58:20.863+00',
          created_at: '2020-11-18 12:58:20.864248+00'
        },
        {
          id: '2048',
          course_id: '112',
          file_name: '210312_Todennäköisyyslaskenta_KK_ratkaisut.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-31 13:54:02.998+00',
          created_at: '2021-03-31 13:54:02.999368+00'
        },
        {
          id: '2049',
          course_id: '108',
          file_name: '210311_Tietorakenteet_ja_algoritmit_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-04-06 07:32:48.687+00',
          created_at: '2021-04-06 07:32:48.688442+00',
          updated_at: '2021-04-06 07:34:29.301833+00'
        },
        {
          id: '2050',
          course_id: '55',
          file_name: '210422_Laskennan_Mallit_EK_teht.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-04-22 18:25:28.836+00',
          created_at: '2021-04-22 18:25:28.836975+00'
        },
        {
          id: '2051',
          course_id: '55',
          file_name: '210422_Laskennan_Mallit_EK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-04-22 18:25:39.365+00',
          created_at: '2021-04-22 18:25:39.363961+00'
        },
        {
          id: '2055',
          course_id: '108',
          file_name: '210915_Tietorakenteet_ja_algoritmit_I_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-09-18 12:32:47.469+00',
          created_at: '2021-09-18 12:32:47.471148+00'
        },
        {
          id: '2060',
          course_id: '5',
          file_name: '220309_Algebra_1_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2022-03-24 08:41:49.221+00',
          created_at: '2022-03-24 08:41:49.222716+00'
        },
        {
          id: '2062',
          course_id: '21',
          file_name: 'C_in_N_exam_2022_10_24.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2022-10-27 01:36:56.535+00',
          created_at: '2022-10-27 01:36:56.537504+00'
        },
        {
          id: '1970',
          course_id: '126',
          file_name: '181025_Introduction_to_Artificial_Intelligence_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-15 14:56:02.512+00',
          created_at: '2020-10-15 14:56:02.513066+00'
        },
        {
          id: '1971',
          course_id: '126',
          file_name: '191024_Introduction_to_Artificial_Intelligence_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-15 14:56:10.211+00',
          created_at: '2020-10-15 14:56:10.211816+00'
        },
        {
          id: '2041',
          course_id: '43',
          file_name: '201215_Introduction_to_game_programming_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-12-15 16:42:35.046+00',
          created_at: '2020-12-15 16:42:35.047931+00'
        },
        {
          id: '2042',
          course_id: '28',
          file_name: '201215_Differentiaalilaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-12-15 19:38:38.395+00',
          created_at: '2020-12-15 19:38:38.397029+00'
        },
        {
          id: '2043',
          course_id: '37',
          file_name: '210308_Integraalilaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-08 12:41:00.544+00',
          created_at: '2021-03-08 12:41:00.546027+00'
        },
        {
          id: '2052',
          course_id: '95',
          file_name: 'questions.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-06-05 10:35:21.994+00',
          created_at: '2021-06-05 10:35:21.99593+00'
        },
        {
          id: '2053',
          course_id: '41',
          file_name: '151024_Introduction_to_Computer_Creativity_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-06-29 16:53:59.456+00',
          created_at: '2021-06-29 16:53:59.458449+00'
        },
        {
          id: '2054',
          course_id: '26',
          file_name: '182610_Design_and_Analysis_of_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-08-09 18:33:29.964+00',
          created_at: '2021-08-09 18:33:29.964791+00'
        },
        {
          id: '2056',
          course_id: '26',
          file_name: '20211027_Design_and_Analysis_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-10-27 10:49:57.703+00',
          created_at: '2021-10-27 10:49:57.70498+00'
        },
        {
          id: '2057',
          course_id: '26',
          file_name: '20201021_Design_and_Analysis_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-10-27 10:50:59.259+00',
          created_at: '2021-10-27 10:50:59.259915+00'
        },
        {
          id: '2061',
          course_id: '74',
          file_name: '220806_Ohjelmoinnin_perusteet.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2022-08-14 11:32:45.51+00',
          created_at: '2022-08-14 11:32:45.513118+00'
        },
        {
          id: '1972',
          course_id: '55',
          file_name: '200928_Laskennan_mallit_VK1_pisteytys.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-18 14:59:54.011+00',
          created_at: '2020-10-18 14:59:54.012202+00'
        },
        {
          id: '1973',
          course_id: '55',
          file_name: '201014_Laskennan_mallit_VK2_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-18 15:00:33.876+00',
          created_at: '2020-10-18 15:00:33.876256+00'
        },
        {
          id: '1974',
          course_id: '126',
          file_name: '201021_Introduction_to_Artificial_Intelligence_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-21 16:08:15.855+00',
          created_at: '2020-10-21 16:08:15.856751+00'
        },
        {
          id: '1975',
          course_id: '84',
          file_name: '201022_Raja_arvot_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-23 06:40:26.186+00',
          created_at: '2020-10-23 06:40:26.187778+00'
        },
        {
          id: '1977',
          course_id: '55',
          file_name: 'vk2ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-25 09:35:59.468+00',
          created_at: '2020-10-25 09:35:59.468989+00',
          updated_at: '2020-10-25 09:36:24.467711+00',
          removed_at: '2020-10-25 09:36:24.467711+00'
        },
        {
          id: '1976',
          course_id: '55',
          file_name: 'vk1ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-25 09:35:49.504+00',
          created_at: '2020-10-25 09:35:49.506133+00',
          updated_at: '2020-10-25 09:36:33.34819+00',
          removed_at: '2020-10-25 09:36:33.34819+00'
        },
        {
          id: '1978',
          course_id: '55',
          file_name: 'kkratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-25 09:36:11.454+00',
          created_at: '2020-10-25 09:36:11.455149+00',
          updated_at: '2020-10-25 09:36:40.753107+00',
          removed_at: '2020-10-25 09:36:40.753107+00'
        },
        {
          id: '1979',
          course_id: '55',
          file_name: '2020_10_23_Laskennan_mallit_kk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-25 09:38:07.071+00',
          created_at: '2020-10-25 09:38:07.072279+00',
          updated_at: '2020-10-25 09:38:36.810315+00',
          removed_at: '2020-10-25 09:38:36.810315+00'
        },
        {
          id: '1980',
          course_id: '55',
          file_name: '201023_Laskennan_mallit_kk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-25 09:39:26.119+00',
          created_at: '2020-10-25 09:39:26.119472+00'
        },
        {
          id: '1981',
          course_id: '55',
          file_name: '201014_Laskennan_mallit_VK2_pisteytys.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-10-27 15:53:11.444+00',
          created_at: '2020-10-27 15:53:11.446388+00'
        },
        {
          id: '2044',
          course_id: '112',
          file_name: '210312_Todennäköisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-12 10:16:32.088+00',
          created_at: '2021-03-12 10:16:32.08909+00'
        },
        {
          id: '2058',
          course_id: '26',
          file_name: '20211027_Design_and_Analysis_Algorithms_KK_sol.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-11-11 08:57:13.791+00',
          created_at: '2021-11-11 08:57:13.790791+00'
        },
        {
          id: '1420',
          course_id: '112',
          file_name: '160314_Todennäköisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-19 12:07:08.371+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-26 02:31:18.368115+00'
        },
        {
          id: '2045',
          course_id: '112',
          file_name: '080303_Todennäköisyyslaskenta_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-26 02:32:44.984+00',
          created_at: '2021-03-26 02:32:44.98486+00'
        },
        {
          id: '2046',
          course_id: '112',
          file_name: '090302_Todennäköisyyslaskenta_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-26 02:33:37.924+00',
          created_at: '2021-03-26 02:33:37.923782+00'
        },
        {
          id: '2047',
          course_id: '112',
          file_name: '120312_Todennäköisyyslaskenta_sv_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2021-03-26 02:35:48.302+00',
          created_at: '2021-03-26 02:35:48.30226+00'
        },
        {
          id: '2059',
          course_id: '112',
          file_name: '220311_Todennäköisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2022-03-11 14:25:04.624+00',
          created_at: '2022-03-11 14:25:04.626417+00'
        },
        {
          id: '1523',
          course_id: '74',
          file_name: '111018_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:07:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.549052+00'
        },
        {
          id: '1541',
          course_id: '74',
          file_name: '051017_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.671494+00'
        },
        {
          id: '1544',
          course_id: '74',
          file_name: '100612_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:17:27+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.1552+00'
        },
        {
          id: '1830',
          course_id: '16',
          file_name: '121127_C_ohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:32:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.313006+00'
        },
        {
          id: '1768',
          course_id: '22',
          file_name: '121116_Data_Compression_Techniques_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:33:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.365722+00'
        },
        {
          id: '1946',
          course_id: '8',
          file_name: '121127_Algorithms_for_Bioinformatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:33:32+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.418526+00'
        },
        {
          id: '1448',
          course_id: '26',
          file_name: '121127_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:35:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.470179+00'
        },
        {
          id: '1862',
          course_id: '33',
          file_name: '121127_Health_Informatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:41:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.57578+00'
        },
        {
          id: '1735',
          course_id: '39',
          file_name: '121127_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:43:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.684469+00'
        },
        {
          id: '1622',
          course_id: '72',
          file_name: '121120_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:48:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.896858+00'
        },
        {
          id: '1375',
          course_id: '73',
          file_name: '121210_Ohjelmoinnin_jatkokurssi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:51:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.004593+00'
        },
        {
          id: '1506',
          course_id: '30',
          file_name: '120921_Distributed_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:23:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.756522+00'
        },
        {
          id: '1650',
          course_id: '106',
          file_name: '101214_Tietoliikenteen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:36:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.077655+00'
        },
        {
          id: '1648',
          course_id: '106',
          file_name: '121211_Tietoliikenteen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:11:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.772737+00'
        },
        {
          id: '1381',
          course_id: '80',
          file_name: '130419_Overlay_and_P2P_Networks_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-19 17:04:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.209731+00'
        },
        {
          id: '1884',
          course_id: '71',
          file_name: '131211_Ohjelmistotekniikan_menetelmat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:56:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.79523+00'
        },
        {
          id: '1398',
          course_id: '67',
          file_name: '140204_Ohjelmistojen_testaus_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 10:29:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.957765+00'
        },
        {
          id: '1814',
          course_id: '44',
          file_name: '140204_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:11:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.646234+00'
        },
        {
          id: '1762',
          course_id: '77',
          file_name: '140128_Ohjelmointitekniikka_JavaScript_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:27:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.463628+00'
        },
        {
          id: '1718',
          course_id: '92',
          file_name: '140128_Service_Ecosystems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:27:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.515293+00'
        },
        {
          id: '1549',
          course_id: '74',
          file_name: '131014_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 21:49:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.416771+00'
        },
        {
          id: '1907',
          course_id: '79',
          file_name: '140226_Operating_Systems_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 11:56:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.522799+00'
        },
        {
          id: '1635',
          course_id: '24',
          file_name: '140224_Data_Structures_and_Algorithms_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 11:58:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.684094+00'
        },
        {
          id: '1500',
          course_id: '109',
          file_name: '140227_Tietoturvan_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:27:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.397233+00'
        },
        {
          id: '1347',
          course_id: '81',
          file_name:
            '140408_Palveluperustaisten_liiketoimintaprosessien_suunnittelu_ja_toteuttaminen_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:12:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.250357+00'
        },
        {
          id: '1672',
          course_id: '53',
          file_name: '160425_Kayttojarjestelmat_MK7.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.699892+00'
        },
        {
          id: '1413',
          course_id: '99',
          file_name: '160205_String_Processing_Algorithms_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:15:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.965366+00'
        },
        {
          id: '1474',
          course_id: '55',
          file_name: '161222_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:51:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.558742+00'
        },
        {
          id: '1700',
          course_id: '52',
          file_name: '161028_Johdatus_yliopistomatematiikkaan_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:14:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.256228+00'
        },
        {
          id: '1900',
          course_id: '70',
          file_name: '150505_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:43:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.791155+00'
        },
        {
          id: '1947',
          course_id: '8',
          file_name: '160812_Algorithms_for_Bioinformatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:26:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.857458+00'
        },
        {
          id: '1755',
          course_id: '21',
          file_name: '161220_Cryptography_in_Networking_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.206687+00'
        },
        {
          id: '1818',
          course_id: '32',
          file_name: '160309_Hajautetut_tietokannat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.068852+00'
        },
        {
          id: '1602',
          course_id: '43',
          file_name: '160617_Introduction_to_Game_Programming_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:32:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.871619+00'
        },
        {
          id: '1433',
          course_id: '56',
          file_name:
            '151218_Learning_Markov_Random_Fields_and_Models_of_Statistical_Physics_from_Data_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.349068+00'
        },
        {
          id: '1564',
          course_id: '103',
          file_name: '161024_Tietokantojen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:45:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.758891+00'
        },
        {
          id: '1695',
          course_id: '53',
          file_name: '160617_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:53:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.737135+00'
        },
        {
          id: '1789',
          course_id: '105',
          file_name: '141118_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:41:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.673666+00'
        },
        {
          id: '1493',
          course_id: '55',
          file_name: '160927_Laskennan_mallit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:43:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.052869+00'
        },
        {
          id: '1334',
          course_id: '108',
          file_name: '171024_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-10-31 15:11:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.993514+00'
        },
        {
          id: '1587',
          course_id: '58',
          file_name: '171026_Lineaarialgebra_ja_matriisilaskenta_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:17:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.047549+00'
        },
        {
          id: '1880',
          course_id: '71',
          file_name: '170915_Ohjelmistotekniikan_menetelmat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:32:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.321998+00'
        },
        {
          id: '1711',
          course_id: '31',
          file_name: '170425_Game_Engine_Architecture_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 13:44:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.535173+00'
        },
        {
          id: '1801',
          course_id: '44',
          file_name: '170421_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 13:45:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.588879+00'
        },
        {
          id: '1623',
          course_id: '72',
          file_name: '171218_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:45:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.912004+00'
        },
        {
          id: '1918',
          course_id: '98',
          file_name: '150414_Software_design_C_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:35:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.734456+00'
        },
        {
          id: '1391',
          course_id: '117',
          file_name: '151120_Unsupervised_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:43:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.577786+00'
        },
        {
          id: '1658',
          course_id: '53',
          file_name: '180307_Kayttojarjestelmat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:22:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.479455+00'
        },
        {
          id: '1326',
          course_id: '108',
          file_name: '171024_Tietorakenteet_ja_algoritmit.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-05-03 11:40:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-10 07:02:40.575974+00',
          removed_at: '2021-03-10 07:02:40.575974+00'
        },
        {
          id: '1310',
          course_id: '86',
          file_name: '130429_Randomized_Algorithms_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-01 15:30:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.262608+00'
        },
        {
          id: '1312',
          course_id: '4',
          file_name: '140131_Advanced_course_in_programming_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:04:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.484837+00'
        },
        {
          id: '1315',
          course_id: '108',
          file_name: '150609_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:21:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.634941+00'
        },
        {
          id: '1321',
          course_id: '108',
          file_name: '151201_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:56:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.613499+00'
        },
        {
          id: '1329',
          course_id: '108',
          file_name: '150915_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:56:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.66546+00'
        },
        {
          id: '1324',
          course_id: '108',
          file_name: '150506_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:56:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.776032+00'
        },
        {
          id: '1314',
          course_id: '108',
          file_name: '150302_Tietorakenteet_ja_algoritmit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:56:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.828642+00'
        },
        {
          id: '1331',
          course_id: '108',
          file_name: '160511_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:58:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.933152+00'
        },
        {
          id: '1311',
          course_id: '86',
          file_name: '160621_Randomized_Algorithms_II_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:42:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.164235+00'
        },
        {
          id: '1313',
          course_id: '108',
          file_name: '160913_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:48:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.258721+00'
        },
        {
          id: '1318',
          course_id: '108',
          file_name: '170306_Tietorakenteet_ja_algoritmit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:48:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.364315+00'
        },
        {
          id: '1317',
          course_id: '108',
          file_name: '170510_Tietorakenteet_ja_algoritmit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-10 16:21:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.270871+00'
        },
        {
          id: '1320',
          course_id: '108',
          file_name: '161220_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:42:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.833732+00'
        },
        {
          id: '1327',
          course_id: '108',
          file_name: '161024_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:42:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.887414+00'
        },
        {
          id: '1319',
          course_id: '108',
          file_name: '141024_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:42:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.995952+00'
        },
        {
          id: '1316',
          course_id: '108',
          file_name: '150414_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:26:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.30221+00'
        },
        {
          id: '1322',
          course_id: '108',
          file_name: '170500_Tietorakenteet_ja_algoritmit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:44:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.779418+00'
        },
        {
          id: '1323',
          course_id: '108',
          file_name: '190304_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-06-12 17:29:10.532+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1325',
          course_id: '108',
          file_name: '181218_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 09:57:41.575+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1328',
          course_id: '108',
          file_name: '181024_Tietorakenteet_ja_algoritmit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-27 11:10:41.547+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1330',
          course_id: '108',
          file_name: '190508_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-06-10 15:50:16.943+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1357',
          course_id: '78',
          file_name: '150918_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:15:21.14+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1358',
          course_id: '78',
          file_name: '160916_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:17:22.916+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1362',
          course_id: '119',
          file_name: '121123_Web_palvelinohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:04:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.596526+00'
        },
        {
          id: '1353',
          course_id: '78',
          file_name: '120228_Ohjelmointitekniikka_Scala_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:58:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.446682+00'
        },
        {
          id: '1354',
          course_id: '78',
          file_name: '100503_Ohjelmointitekniikka_Scala_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:00:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.498717+00'
        },
        {
          id: '1377',
          course_id: '75',
          file_name: '130419_Ohjelmointikielten_periaatteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-19 17:02:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.103909+00'
        },
        {
          id: '1355',
          course_id: '78',
          file_name: '130419_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-19 17:03:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.157269+00'
        },
        {
          id: '1373',
          course_id: '73',
          file_name: '130429_Ohjelmoinnin_jatkokurssi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-01 15:31:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.314296+00'
        },
        {
          id: '1361',
          course_id: '63',
          file_name: '130503_Mobile_Middleware_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-03 17:44:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.525059+00'
        },
        {
          id: '1371',
          course_id: '73',
          file_name: '131209_Ohjelmoinnin_jatkokurssi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:59:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.901285+00'
        },
        {
          id: '1367',
          course_id: '73',
          file_name: '140131_Ohjelmoinnin_jatkokurssi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:01:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.377932+00'
        },
        {
          id: '1363',
          course_id: '119',
          file_name: '140204_Web_palvelinohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:08:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.538044+00'
        },
        {
          id: '1349',
          course_id: '81',
          file_name:
            '140131_Palveluperustaisten_liiketoimintaprosessien_suunnittelu_ja_toteuttaminen_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:14:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.753389+00'
        },
        {
          id: '1360',
          course_id: '45',
          file_name: '140124_Introduction_to_Programming_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:17:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.969806+00'
        },
        {
          id: '1380',
          course_id: '75',
          file_name: '131115_Ohjelmointikielten_periaatteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:20:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.144242+00'
        },
        {
          id: '1372',
          course_id: '73',
          file_name: '140404_Ohjelmoinnin_jatkokurssi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:08:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.0914+00'
        },
        {
          id: '1378',
          course_id: '75',
          file_name: '150609_Ohjelmointikielten_periaatteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:27:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.848149+00'
        },
        {
          id: '1345',
          course_id: '108',
          file_name: '150606_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:56:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.720243+00'
        },
        {
          id: '1339',
          course_id: '108',
          file_name: '160307_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:58:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.880069+00'
        },
        {
          id: '1333',
          course_id: '108',
          file_name: '160614_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:58:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.986331+00'
        },
        {
          id: '1351',
          course_id: '37',
          file_name: '170309_Integraalilaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.392971+00'
        },
        {
          id: '1370',
          course_id: '73',
          file_name: '150410_Ohjelmoinnin_jatkokurssi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.254879+00'
        },
        {
          id: '1368',
          course_id: '73',
          file_name: '161000_Ohjelmoinnin_jatkokurssi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.306875+00'
        },
        {
          id: '1366',
          course_id: '73',
          file_name: '170127_Ohjelmoinnin_jatkokurssi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.360475+00'
        },
        {
          id: '1359',
          course_id: '78',
          file_name: '160513_Ohjelmointitekniikka_Scala_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.683736+00'
        },
        {
          id: '1356',
          course_id: '78',
          file_name: '160614_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.739177+00'
        },
        {
          id: '1352',
          course_id: '78',
          file_name: '170127_Ohjelmointitekniikka_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.792715+00'
        },
        {
          id: '1348',
          course_id: '81',
          file_name:
            '141118_Palveluperustaisten_liiketoimintaprosessien_suunnittelu_ja_toteuttaminen_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:41:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.95192+00'
        },
        {
          id: '1337',
          course_id: '108',
          file_name: '161129_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:48:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.312486+00'
        },
        {
          id: '1365',
          course_id: '119',
          file_name: '141022_Web_palvelinohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:50:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.956316+00'
        },
        {
          id: '1374',
          course_id: '73',
          file_name: '170407_Ohjelmoinnin_jatkokurssi.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:05:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.538667+00'
        },
        {
          id: '1341',
          course_id: '108',
          file_name: '170421_Tietorakenteet_ja_algoritmit.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:10:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.915805+00'
        },
        {
          id: '1376',
          course_id: '75',
          file_name: '170508_Ohjelmointikielten_periaatteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:18:32+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.091907+00'
        },
        {
          id: '1338',
          course_id: '108',
          file_name: '170124_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:42:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.780421+00'
        },
        {
          id: '1332',
          course_id: '108',
          file_name: '150506_Tietorakenteet_ja_algoritmit_ENG.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:42:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.942353+00'
        },
        {
          id: '1369',
          course_id: '73',
          file_name: '150500_Ohjelmoinnin_jatkokurssi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:35:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.406794+00'
        },
        {
          id: '1342',
          course_id: '108',
          file_name: '171219_Tietorakenteet_ja_algoritmit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-18 09:23:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.751921+00'
        },
        {
          id: '1364',
          course_id: '119',
          file_name: '171220_Web_palvelinohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:46:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.076038+00'
        },
        {
          id: '1346',
          course_id: '81',
          file_name:
            '150417_Palveluperustaisten_liiketoimintaprosessien_suunnittelu_ja_toteuttaminen_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:38:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.002731+00'
        },
        {
          id: '1344',
          course_id: '108',
          file_name: '151023_Tietorakenteet_ja_algoritmit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:41:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.271547+00'
        },
        {
          id: '1379',
          course_id: '75',
          file_name: '151120_Ohjelmointikielten_periaatteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:44:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.629544+00'
        },
        {
          id: '1350',
          course_id: '81',
          file_name:
            '160415_Palveluperustaisten_liiketoimintaprosessien_suunnittelu_ja_toteuttaminen_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:05:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.58561+00'
        },
        {
          id: '1336',
          course_id: '108',
          file_name: '171208_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:19:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.158407+00'
        },
        {
          id: '1340',
          course_id: '108',
          file_name: '180305_Tietorakenteet_ja_algoritmit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:21:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.316949+00'
        },
        {
          id: '1343',
          course_id: '108',
          file_name: '180124_Tietorakenteet_ja_algoritmit_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-27 10:08:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.639462+00'
        },
        {
          id: '1335',
          course_id: '108',
          file_name: '180413_Tietorakenteet_ja_algoritmit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-27 10:08:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.697848+00'
        },
        {
          id: '1386',
          course_id: '80',
          file_name: '150304_Overlay_and_P2P_Networks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 10:03:09.957+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1393',
          course_id: '117',
          file_name: '150922_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:13:59.94+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1397',
          course_id: '67',
          file_name: '180507_Ohjelmistojen_testaus_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:45:30.385+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1410',
          course_id: '116',
          file_name: '150915_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 10:03:56.953+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1416',
          course_id: '99',
          file_name: '150918_String_Processing_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:14:46.908+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1423',
          course_id: '112',
          file_name: '130311_Todennakoisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-19 12:06:55.627+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-26 02:30:42.614686+00'
        },
        {
          id: '1407',
          course_id: '116',
          file_name: '170407_Transaktioiden_hallinta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:08:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.752346+00'
        },
        {
          id: '1421',
          course_id: '112',
          file_name: '100315_Todennakoisyyslaskenta_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.269201+00'
        },
        {
          id: '1419',
          course_id: '112',
          file_name: '090203_Todennakoisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.216351+00',
          removed_at: '2021-03-26 02:34:02.205714+00'
        },
        {
          id: '1429',
          course_id: '112',
          file_name: '110314_Todennakoisyyslaskenta_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.32202+00'
        },
        {
          id: '1424',
          course_id: '112',
          file_name: '120312_Todennakoisyyslaskenta_KK_ratk.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.375105+00'
        },
        {
          id: '1422',
          course_id: '112',
          file_name: '160314_Todennakoisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.428874+00'
        },
        {
          id: '1425',
          course_id: '112',
          file_name: 'Kurssikokeet2008-2012jaRatkaisut.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-19 12:06:36.511+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-26 02:35:55.696447+00',
          removed_at: '2021-03-26 02:35:55.696447+00'
        },
        {
          id: '1385',
          course_id: '80',
          file_name: '121123_Overlay_and_P2P_Networks_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:52:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.063298+00'
        },
        {
          id: '1392',
          course_id: '117',
          file_name: '121116_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:03:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.542882+00'
        },
        {
          id: '1394',
          course_id: '117',
          file_name: '130412_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:11:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.41448+00'
        },
        {
          id: '1402',
          course_id: '100',
          file_name: '130419_Supervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-19 17:02:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.050863+00'
        },
        {
          id: '1389',
          course_id: '117',
          file_name: '140131_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:15:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.807089+00'
        },
        {
          id: '1388',
          course_id: '117',
          file_name: '131115_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:19:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.022614+00'
        },
        {
          id: '1412',
          course_id: '99',
          file_name: '131212_String_Processing_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:30:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.687712+00'
        },
        {
          id: '1403',
          course_id: '100',
          file_name: '140226_Supervised_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 11:57:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.631491+00'
        },
        {
          id: '1409',
          course_id: '116',
          file_name: '140226_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 12:15:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.789954+00'
        },
        {
          id: '1418',
          course_id: '122',
          file_name: '140225_Web_server_programming_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 12:21:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.946234+00'
        },
        {
          id: '1382',
          course_id: '80',
          file_name: '140226_Overlay_and_P2P_Networks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 16:32:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.109498+00'
        },
        {
          id: '1415',
          course_id: '99',
          file_name: '140408_String_Processing_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:10:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.145381+00'
        },
        {
          id: '1401',
          course_id: '100',
          file_name: '140424_Supervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 08:01:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.680203+00'
        },
        {
          id: '1387',
          course_id: '80',
          file_name: '140424_Overlay_and_P2P_Networks_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 08:02:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.733911+00'
        },
        {
          id: '1390',
          course_id: '117',
          file_name: '150609_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:22:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.689226+00'
        },
        {
          id: '1404',
          course_id: '116',
          file_name: '161222_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 10:12:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.05913+00'
        },
        {
          id: '1414',
          course_id: '99',
          file_name: '141217_String_Processing_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:15:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.017247+00'
        },
        {
          id: '1408',
          course_id: '116',
          file_name: '141219_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:16:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.07101+00'
        },
        {
          id: '1426',
          course_id: '112',
          file_name: '080303_Todennakoisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 15:07:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.161843+00',
          removed_at: '2021-03-26 02:34:17.15282+00'
        },
        {
          id: '1399',
          course_id: '67',
          file_name: '160621_Ohjelmistojen_testaus_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.773215+00'
        },
        {
          id: '1400',
          course_id: '67',
          file_name: '161129_Ohjelmistojen_testaus_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.828826+00'
        },
        {
          id: '1384',
          course_id: '80',
          file_name: '160309_Overlay_and_P2P_Networks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.845524+00'
        },
        {
          id: '1383',
          course_id: '80',
          file_name: '170308_Overlay_and_P2P_Networks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:41:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.900101+00'
        },
        {
          id: '1417',
          course_id: '99',
          file_name: '160809_String_Processing_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:44:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.488495+00'
        },
        {
          id: '1405',
          course_id: '116',
          file_name: '150410_Transaktioiden_hallinta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.473499+00'
        },
        {
          id: '1406',
          course_id: '116',
          file_name: '151218_Transaktioiden_hallinta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.526638+00'
        },
        {
          id: '1395',
          course_id: '117',
          file_name: '160129_Unsupervised_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.581247+00'
        },
        {
          id: '1428',
          course_id: '112',
          file_name: '170310_Todennäköisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:51:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.115745+00'
        },
        {
          id: '1430',
          course_id: '28',
          file_name: '170614_Differentiaalilaskenta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:54:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.144548+00'
        },
        {
          id: '1484',
          course_id: '55',
          file_name: '171018_Laskennan_mallit_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:18:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.214758+00'
        },
        {
          id: '1431',
          course_id: '28',
          file_name: '151217_Differentiaalilaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:52:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.004738+00'
        },
        {
          id: '1411',
          course_id: '99',
          file_name: '151218_String_Processing_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:53:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.056883+00'
        },
        {
          id: '1427',
          course_id: '112',
          file_name: '180309_Todennakoisyyslaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:23:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.532603+00'
        },
        {
          id: '1432',
          course_id: '28',
          file_name: '1800305Differentiaalilaskenta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:24:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.585791+00'
        },
        {
          id: '1436',
          course_id: '38',
          file_name: '180511_data_vis_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:35:46.93+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1441',
          course_id: '69',
          file_name:
            '190305_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:44:56.433+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1443',
          course_id: '94',
          file_name: '181217_Software_product_management_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-17 12:56:29.727+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1447',
          course_id: '17',
          file_name: '190418_Compilers_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 09:56:03.935+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1458',
          course_id: '47',
          file_name: '181018_Inverseproblems1_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-26 06:15:04.698+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1463',
          course_id: '55',
          file_name: '171122_Laskennan_mallit_VK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:25:55.808+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1464',
          course_id: '55',
          file_name: '181001_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-24 05:48:20.286+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1473',
          course_id: '55',
          file_name: '180608_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:26:52.328+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1476',
          course_id: '55',
          file_name: '171221_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:25:41.524+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1477',
          course_id: '55',
          file_name: '181026_Laskennan_Mallit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-26 15:12:59.474+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1465',
          course_id: '55',
          file_name: '101216_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:50:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.341758+00'
        },
        {
          id: '1440',
          course_id: '69',
          file_name:
            '121210_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:02:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.557933+00'
        },
        {
          id: '1483',
          course_id: '55',
          file_name: '101021_Laskennan_mallit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:09:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.610291+00'
        },
        {
          id: '1456',
          course_id: '26',
          file_name: '140128_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:28:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.569637+00'
        },
        {
          id: '1457',
          course_id: '26',
          file_name: '140404_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:49:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.663618+00'
        },
        {
          id: '1470',
          course_id: '55',
          file_name: '161019_Laskennan_mallit_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:50:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.340042+00'
        },
        {
          id: '1481',
          course_id: '55',
          file_name: '161027_Laskennan_mallit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:50:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.393167+00'
        },
        {
          id: '1468',
          course_id: '55',
          file_name: '161123_Laskennan_mallit_VK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:50:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.453152+00'
        },
        {
          id: '1480',
          course_id: '55',
          file_name: '161214_Laskennan_mallit_VK4.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:50:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.506135+00'
        },
        {
          id: '1454',
          course_id: '26',
          file_name: '150410_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.428621+00'
        },
        {
          id: '1449',
          course_id: '26',
          file_name: '161019_Design_and_Analysis_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.569228+00'
        },
        {
          id: '1451',
          course_id: '26',
          file_name: '161026_Design_and_Analysis_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.621967+00'
        },
        {
          id: '1452',
          course_id: '26',
          file_name: '170214_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.678983+00'
        },
        {
          id: '1469',
          course_id: '55',
          file_name: '170203_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:34:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.134598+00'
        },
        {
          id: '1475',
          course_id: '55',
          file_name: '160415_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:34:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.188797+00'
        },
        {
          id: '1472',
          course_id: '55',
          file_name: '160205_Laskennan_mallit_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:34:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.240975+00'
        },
        {
          id: '1435',
          course_id: '56',
          file_name:
            '160129_Learning_Markov_Random_Fields_and_Models_of_Statistical_Physics_from_Data_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.40266+00'
        },
        {
          id: '1434',
          course_id: '56',
          file_name:
            '160419_Learning_Markov_Random_Fields_and_Models_of_Statistical_Physics_from_Data_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.45505+00'
        },
        {
          id: '1442',
          course_id: '69',
          file_name:
            '160812_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.881213+00'
        },
        {
          id: '1437',
          course_id: '69',
          file_name:
            '161221_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.934945+00'
        },
        {
          id: '1439',
          course_id: '69',
          file_name:
            '170131_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.98783+00'
        },
        {
          id: '1459',
          course_id: '90',
          file_name:
            '160309_Satisfiability,_Boolean_Modeling_and_Computation_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:42:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.27459+00'
        },
        {
          id: '1460',
          course_id: '90',
          file_name:
            '160812_Satisfiability,_Boolean_Modeling_and_Computation_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:43:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.328334+00'
        },
        {
          id: '1461',
          course_id: '118',
          file_name: '140827_Verkot_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:50:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.011333+00'
        },
        {
          id: '1462',
          course_id: '118',
          file_name: '151218_Verkot_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:50:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.064208+00'
        },
        {
          id: '1444',
          course_id: '17',
          file_name: '160308_Compilers_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:54:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.845196+00'
        },
        {
          id: '1455',
          course_id: '26',
          file_name: '170407_Design_and_Analysis_Algorithms.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:07:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.699955+00'
        },
        {
          id: '1482',
          course_id: '55',
          file_name: '140909_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:43:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.106638+00'
        },
        {
          id: '1450',
          course_id: '26',
          file_name: '170505_Design_and_Analysis_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:45:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.429052+00'
        },
        {
          id: '1467',
          course_id: '55',
          file_name: '151218_Laskennan_mallit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:38:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.566866+00'
        },
        {
          id: '1466',
          course_id: '55',
          file_name: '171026_Laskennan_mallit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:17:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.107116+00'
        },
        {
          id: '1453',
          course_id: '26',
          file_name: '151022_Design_and_Analysis_Algorithms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:40:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.11254+00'
        },
        {
          id: '1471',
          course_id: '55',
          file_name: '151116_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:42:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.471116+00'
        },
        {
          id: '1438',
          course_id: '69',
          file_name:
            '160306_Ohjelmistoprojektien_johtaminen_ja_ryhmadynamiikka_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:02:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.267914+00'
        },
        {
          id: '1445',
          course_id: '17',
          file_name: '160415_Compilers_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:02:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.373281+00'
        },
        {
          id: '1479',
          course_id: '55',
          file_name: '170607_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:14:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.909879+00'
        },
        {
          id: '1478',
          course_id: '55',
          file_name: '171213_Laskennan_mallit_VK4.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:19:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.211281+00'
        },
        {
          id: '1446',
          course_id: '17',
          file_name: '180306_Compilers_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:21:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.372782+00'
        },
        {
          id: '1491',
          course_id: '55',
          file_name: '180810_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:27:25.848+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1496',
          course_id: '55',
          file_name: '181017_Laskennan_mallit_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-24 05:48:27.998+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1498',
          course_id: '55',
          file_name: '190930_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-09-30 12:22:52.915+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1505',
          course_id: '30',
          file_name: '181219_Distributed_Systems_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 09:57:09.363+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1507',
          course_id: '30',
          file_name: '160916_Distributed_Systems.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:10:38.204+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1514',
          course_id: '60',
          file_name: '170412_Logiikka_I_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-05-03 11:40:50+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1520',
          course_id: '74',
          file_name: '050608_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.618135+00'
        },
        {
          id: '1522',
          course_id: '74',
          file_name: '060610_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.723948+00'
        },
        {
          id: '1526',
          course_id: '74',
          file_name: '061016_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:27+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.776979+00'
        },
        {
          id: '1518',
          course_id: '74',
          file_name: '070609_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.830042+00'
        },
        {
          id: '1524',
          course_id: '74',
          file_name: '071017_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.883656+00'
        },
        {
          id: '1527',
          course_id: '74',
          file_name: '080606_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.936009+00'
        },
        {
          id: '1531',
          course_id: '74',
          file_name: '091021_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:17:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.101747+00'
        },
        {
          id: '1517',
          course_id: '74',
          file_name: '101019_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:17:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.208649+00'
        },
        {
          id: '1535',
          course_id: '74',
          file_name: '090606_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:20:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.259758+00'
        },
        {
          id: '1530',
          course_id: '74',
          file_name: '121123_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:48:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.950326+00'
        },
        {
          id: '1499',
          course_id: '109',
          file_name: '121116_Tietoturvan_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:02:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.488128+00'
        },
        {
          id: '1511',
          course_id: '30',
          file_name: '121212_Distributed_Systems_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:23:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.809509+00'
        },
        {
          id: '1501',
          course_id: '109',
          file_name: '100615_Tietoturvan_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:34:30+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.020476+00'
        },
        {
          id: '1487',
          course_id: '55',
          file_name: '111020_Laskennan_mallit_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:09:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.664204+00'
        },
        {
          id: '1485',
          course_id: '55',
          file_name: '111216_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 17:09:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.71793+00'
        },
        {
          id: '1502',
          course_id: '109',
          file_name: '120605_Tietoturvan_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-21 08:09:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.824825+00'
        },
        {
          id: '1488',
          course_id: '55',
          file_name: '130412_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:08:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.197562+00'
        },
        {
          id: '1504',
          course_id: '109',
          file_name: '130416_Tietoturvan_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:30:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.944765+00'
        },
        {
          id: '1513',
          course_id: '30',
          file_name: '140131_Distributed_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:03:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.431759+00'
        },
        {
          id: '1532',
          course_id: '74',
          file_name: '140124_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:17:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.915834+00'
        },
        {
          id: '1489',
          course_id: '55',
          file_name: '131213_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:40:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.095881+00'
        },
        {
          id: '1528',
          course_id: '74',
          file_name: '110301_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 21:47:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.20386+00'
        },
        {
          id: '1537',
          course_id: '74',
          file_name: '120228_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 21:47:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.256846+00'
        },
        {
          id: '1515',
          course_id: '60',
          file_name: '140228_Logiikka_I_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:25:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.22629+00'
        },
        {
          id: '1510',
          course_id: '30',
          file_name: '140404_Distributed_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:56:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.876862+00'
        },
        {
          id: '1486',
          course_id: '55',
          file_name: '160928_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:50:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.287734+00'
        },
        {
          id: '1534',
          course_id: '74',
          file_name: '160906_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:14:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.202646+00'
        },
        {
          id: '1512',
          course_id: '30',
          file_name: '160129_Distributed_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:29:30+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.784539+00'
        },
        {
          id: '1490',
          course_id: '55',
          file_name: '151012_Laskennan_mallit_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.294572+00'
        },
        {
          id: '1516',
          course_id: '60',
          file_name: '150508_Logiikka_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:36:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.667574+00'
        },
        {
          id: '1519',
          course_id: '74',
          file_name: '151000_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.415776+00'
        },
        {
          id: '1529',
          course_id: '74',
          file_name: '160122_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.469258+00'
        },
        {
          id: '1533',
          course_id: '74',
          file_name: '161025_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:39:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.522606+00'
        },
        {
          id: '1503',
          course_id: '109',
          file_name: '150421_Tietoturvan_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:48:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.417853+00'
        },
        {
          id: '1508',
          course_id: '30',
          file_name: '170407_Distributed_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:05:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.594541+00'
        },
        {
          id: '1492',
          course_id: '55',
          file_name: '170421_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:09:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.861074+00'
        },
        {
          id: '1525',
          course_id: '74',
          file_name: '170605_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:48:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.649792+00'
        },
        {
          id: '1536',
          course_id: '74',
          file_name: '170605_Ohjelmoinnin_perusteet_ENG.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:48:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.702124+00'
        },
        {
          id: '1521',
          course_id: '74',
          file_name: '150500_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:36:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.460554+00'
        },
        {
          id: '1495',
          course_id: '55',
          file_name: '170927_Laskennan_mallit_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:26:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.267799+00'
        },
        {
          id: '1497',
          course_id: '55',
          file_name: '170808_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:34:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.427767+00'
        },
        {
          id: '1509',
          course_id: '30',
          file_name: '171220_Distributed_Systems_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:46:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.128548+00'
        },
        {
          id: '1494',
          course_id: '55',
          file_name: '180418_Laskennan_mallit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-27 10:08:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.750589+00'
        },
        {
          id: '1585',
          course_id: '58',
          file_name: '181219_Lineaarialgebra_ja_matriisilaskenta_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-19 11:58:21.21+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1546',
          course_id: '74',
          file_name: '080614_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:34.995019+00'
        },
        {
          id: '1542',
          course_id: '74',
          file_name: '081015_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:16:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.046846+00'
        },
        {
          id: '1565',
          course_id: '103',
          file_name: '121127_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:57:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.328597+00'
        },
        {
          id: '1578',
          course_id: '121',
          file_name: '121211_Web_selainohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:05:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.649264+00'
        },
        {
          id: '1561',
          course_id: '103',
          file_name: '130412_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:11:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.360635+00'
        },
        {
          id: '1555',
          course_id: '20',
          file_name: '130416_Cryptography_and_Network_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:23:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.466118+00'
        },
        {
          id: '1581',
          course_id: '121',
          file_name: '130416_Web_selainohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:24:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.519421+00'
        },
        {
          id: '1553',
          course_id: '110',
          file_name: '130416_Tietovarastot_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:25:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.625366+00'
        },
        {
          id: '1547',
          course_id: '74',
          file_name: '130416_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:29:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.837436+00'
        },
        {
          id: '1538',
          course_id: '74',
          file_name: '130416_Ohjelmoinnin_perusteet_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:29:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.890443+00'
        },
        {
          id: '1576',
          course_id: '41',
          file_name: '140124_Introduction_to_Computational_Creativity.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 13:57:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.273142+00'
        },
        {
          id: '1557',
          course_id: '20',
          file_name: '140204_Cryptography_and_Network_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:00:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.326638+00'
        },
        {
          id: '1567',
          course_id: '103',
          file_name: '140128_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:32:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.796892+00'
        },
        {
          id: '1540',
          course_id: '74',
          file_name: '121016_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 21:48:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.308881+00'
        },
        {
          id: '1539',
          course_id: '74',
          file_name: '130226_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 21:48:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.364721+00'
        },
        {
          id: '1560',
          course_id: '103',
          file_name: '140226_Tietokantojen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 15:30:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.056338+00'
        },
        {
          id: '1588',
          course_id: '58',
          file_name: '140304_Lineaarialgebra_ja_matriisilaskenta_I_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:33:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.504088+00'
        },
        {
          id: '1569',
          course_id: '103',
          file_name: '160309_Tietokantojen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:14:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.91172+00'
        },
        {
          id: '1574',
          course_id: '7',
          file_name:
            '161221_Algorithms_and_Systems_for_Big_Data_Management_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:25:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.588992+00'
        },
        {
          id: '1575',
          course_id: '7',
          file_name:
            '170127_Algorithms_and_Systems_for_Big_Data_Management_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:25:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.642076+00'
        },
        {
          id: '1554',
          course_id: '20',
          file_name: '140815_Cryptography_and_Network_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.015354+00'
        },
        {
          id: '1558',
          course_id: '20',
          file_name: '141118_Cryptography_and_Network_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.100901+00'
        },
        {
          id: '1577',
          course_id: '41',
          file_name: '140815_Introduction_to_Computational_Creativity_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:32:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.766455+00'
        },
        {
          id: '1586',
          course_id: '58',
          file_name: '141022_Lineaarialgebra_ja_matriisilaskenta_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.508343+00'
        },
        {
          id: '1584',
          course_id: '58',
          file_name: '161026_Lineaarialgebra_ja_matriisilaskenta_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:35:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.561764+00'
        },
        {
          id: '1559',
          course_id: '103',
          file_name: '160300_Tietokantojen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:45:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.649017+00'
        },
        {
          id: '1568',
          course_id: '103',
          file_name: '160610_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:45:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.703403+00'
        },
        {
          id: '1571',
          course_id: '103',
          file_name: '161129_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:46:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.81338+00'
        },
        {
          id: '1579',
          course_id: '121',
          file_name: '150300_Web_selainohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:50:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.851065+00'
        },
        {
          id: '1580',
          course_id: '121',
          file_name: '160200_Web_selainohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:50:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.902749+00'
        },
        {
          id: '1552',
          course_id: '110',
          file_name: '150421_Tietovarastot_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:51:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.168968+00'
        },
        {
          id: '1551',
          course_id: '110',
          file_name: '170308_Tietovarastot_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:51:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.222632+00'
        },
        {
          id: '1572',
          course_id: '103',
          file_name: '170407_Tietokantojen_perusteet_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:07:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.645796+00'
        },
        {
          id: '1573',
          course_id: '7',
          file_name:
            '170417_Algorithms_and_Systems_for_Big_Data_Management.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:09:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.809045+00'
        },
        {
          id: '1548',
          course_id: '74',
          file_name: '160419_Ohjelmoinnin_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:49:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.755371+00'
        },
        {
          id: '1545',
          course_id: '74',
          file_name: '150501_Ohjelmoinnin_perusteet_ENG.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:49:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.807042+00'
        },
        {
          id: '1543',
          course_id: '74',
          file_name: '160501_Ohjelmoinnin_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:49:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.860024+00'
        },
        {
          id: '1562',
          course_id: '103',
          file_name: '170124_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:49:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.916536+00'
        },
        {
          id: '1570',
          course_id: '103',
          file_name: '170607_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:49:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.97099+00'
        },
        {
          id: '1566',
          course_id: '103',
          file_name: '170421_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:44:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.726302+00'
        },
        {
          id: '1556',
          course_id: '20',
          file_name: '150417_Cryptography_and_Network_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:37:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.839928+00'
        },
        {
          id: '1550',
          course_id: '110',
          file_name: '151124_Tietovarastot_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:47:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.736311+00'
        },
        {
          id: '1582',
          course_id: '121',
          file_name: '159999_Web_selainohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:55:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.163403+00'
        },
        {
          id: '1583',
          course_id: '121',
          file_name: '160600_Web_selainohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:13:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.747924+00'
        },
        {
          id: '1563',
          course_id: '103',
          file_name: '171208_Tietokantojen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:16:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.100878+00'
        },
        {
          id: '1598',
          course_id: '102',
          file_name: '181218_Tietokannan_suunnittelu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:44:29.597+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1628',
          course_id: '35',
          file_name: '200304_Information_retrieval_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-03-04 16:40:16.226+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1630',
          course_id: '5',
          file_name: '070809_Algebra_I.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-05-03 11:41:02+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1632',
          course_id: '84',
          file_name: '181218_Raja_Arvot_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-18 11:05:52.934+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1634',
          course_id: '84',
          file_name: '190109_Raja_arvot_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-09 09:33:37.119+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1612',
          course_id: '83',
          file_name: '121121_Programming_in_Scala_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:53:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.115271+00'
        },
        {
          id: '1593',
          course_id: '102',
          file_name: '121120_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:57:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.274127+00'
        },
        {
          id: '1640',
          course_id: '106',
          file_name: '111213_Tietoliikenteen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:36:57+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.1302+00'
        },
        {
          id: '1631',
          course_id: '5',
          file_name: '130227_Algebra_I_KK1.jpg',
          mime_type: 'image/jpeg',
          file_path: '00000000-0000-4000-0000-000000000001',
          upload_date: '2013-02-27 14:11:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.933193+00'
        },
        {
          id: '1590',
          course_id: '102',
          file_name: '130412_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:01:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.986407+00'
        },
        {
          id: '1610',
          course_id: '23',
          file_name: '130416_Data_Mining_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:30:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.997029+00'
        },
        {
          id: '1614',
          course_id: '72',
          file_name: '130502_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-03 17:43:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.473476+00'
        },
        {
          id: '1627',
          course_id: '72',
          file_name: '140204_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 10:31:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.01438+00'
        },
        {
          id: '1636',
          course_id: '24',
          file_name: '140128_Data_Structures_and_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:36:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.849497+00'
        },
        {
          id: '1629',
          course_id: '5',
          file_name: '140226_Algebra_I_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 15:25:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.003981+00'
        },
        {
          id: '1638',
          course_id: '106',
          file_name: '140404_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:55:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.770981+00'
        },
        {
          id: '1603',
          course_id: '43',
          file_name: '140424_Introduction_to_Game_Programming_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 08:05:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.787166+00'
        },
        {
          id: '1637',
          course_id: '24',
          file_name: '150609_Data_Structures_and_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:04:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.000061+00'
        },
        {
          id: '1606',
          course_id: '23',
          file_name: '150612_Data_Mining_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:12:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.315287+00'
        },
        {
          id: '1605',
          course_id: '43',
          file_name: '150612_Introduction_to_Game_Programming_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:17:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.528569+00'
        },
        {
          id: '1626',
          course_id: '72',
          file_name: '150609_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:18:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.581561+00'
        },
        {
          id: '1599',
          course_id: '102',
          file_name: '140124_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2016-11-28 00:08:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.954937+00'
        },
        {
          id: '1596',
          course_id: '102',
          file_name: '161026_Tietokannan_suunnittelu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2016-11-28 00:16:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.007752+00'
        },
        {
          id: '1633',
          course_id: '84',
          file_name: '161027_Raja_arvot_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 10:42:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.219337+00'
        },
        {
          id: '1617',
          course_id: '72',
          file_name: '160510_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:14:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.858427+00'
        },
        {
          id: '1609',
          course_id: '23',
          file_name: '150508_Data_Mining_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.322527+00'
        },
        {
          id: '1607',
          course_id: '23',
          file_name: '160419_Data_Mining_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.37434+00'
        },
        {
          id: '1600',
          course_id: '43',
          file_name: '141020_Introduction_to_Game_Programming_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:32:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.818819+00'
        },
        {
          id: '1597',
          course_id: '102',
          file_name: '160809_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:44:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.596152+00'
        },
        {
          id: '1639',
          course_id: '106',
          file_name: '170127_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:47:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.207161+00'
        },
        {
          id: '1616',
          course_id: '72',
          file_name: '160614_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:51:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.276537+00'
        },
        {
          id: '1618',
          course_id: '72',
          file_name: '170509_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-10 05:34:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.164673+00'
        },
        {
          id: '1624',
          course_id: '72',
          file_name: '150505_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:37:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.144857+00'
        },
        {
          id: '1625',
          course_id: '72',
          file_name: '140912_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:38:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.196953+00'
        },
        {
          id: '1613',
          course_id: '72',
          file_name: '141021_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:38:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.251599+00'
        },
        {
          id: '1615',
          course_id: '72',
          file_name: '161122_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:38:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.304315+00'
        },
        {
          id: '1641',
          course_id: '106',
          file_name: '160129_Tietoliikenteen_perusteet.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:39:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.357818+00'
        },
        {
          id: '1601',
          course_id: '43',
          file_name: '170124_Introduction_to_Game_Programming_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:45:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.321343+00'
        },
        {
          id: '1592',
          course_id: '102',
          file_name: '161122_Tietokannan_suunnittelu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:45:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.374456+00'
        },
        {
          id: '1619',
          course_id: '72',
          file_name: '150414_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:24:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.250543+00'
        },
        {
          id: '1621',
          course_id: '72',
          file_name: '150509_Ohjelmistotuotanto_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:37:32+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.513549+00'
        },
        {
          id: '1608',
          course_id: '23',
          file_name: '170310_Data_Mining_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:43:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.674168+00'
        },
        {
          id: '1611',
          course_id: '23',
          file_name: '170425_Data_Mining_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 13:43:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.480783+00'
        },
        {
          id: '1589',
          course_id: '58',
          file_name: '171220_Lineaarialgebra_ja_matriisilaskenta_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:46:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.019298+00'
        },
        {
          id: '1594',
          course_id: '102',
          file_name: '151021_Tietokannan_suunnittelu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:39:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.0564+00'
        },
        {
          id: '1620',
          course_id: '72',
          file_name: '151124_Ohjelmistotuotanto_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:45:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.683466+00'
        },
        {
          id: '1604',
          course_id: '43',
          file_name: '151215_Introduction_to_Game_Programming_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:49:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.841676+00'
        },
        {
          id: '1595',
          course_id: '102',
          file_name: '160122_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:55:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.216076+00'
        },
        {
          id: '1591',
          course_id: '102',
          file_name: '160415_Tietokannan_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:04:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.533327+00'
        },
        {
          id: '1654',
          course_id: '106',
          file_name: '180606_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 10:08:23.796+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1655',
          course_id: '6',
          file_name: '190509_Algebralliset_rakenteet_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-13 06:57:32.4+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1660',
          course_id: '53',
          file_name: '2020_02_12_mk2e_answ.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-02-28 13:06:24.54+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1667',
          course_id: '53',
          file_name: '190213_Kayttojarjestelmat_MK2_vastaukset.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-19 18:08:09.736+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1669',
          course_id: '53',
          file_name: '180228_Kayttojarjestelmat_MK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:31:04.181+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1670',
          course_id: '53',
          file_name: '2020_02_19_mk3e_answ.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-02-28 13:06:34.02+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1674',
          course_id: '53',
          file_name: '180119_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:30:35.117+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1675',
          course_id: '53',
          file_name: '190206_Kayttojarjestelmat_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:35:28.616+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1686',
          course_id: '53',
          file_name: '190206_Kayttojarjestelmat_MK1_vastaukset.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-19 18:08:06.944+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1691',
          course_id: '53',
          file_name: '180214_Kayttojarjestelmat_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:30:56.697+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1694',
          course_id: '53',
          file_name: '190213_Kayttojarjestelmat_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-19 18:05:17.608+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1685',
          course_id: '53',
          file_name: '130227_Kayttojarjestelmat_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-27 12:49:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.88073+00'
        },
        {
          id: '1651',
          course_id: '106',
          file_name: '140131_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 10:31:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.115157+00'
        },
        {
          id: '1680',
          course_id: '53',
          file_name: '140124_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:25:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.302253+00'
        },
        {
          id: '1659',
          course_id: '53',
          file_name: '131115_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:31:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.741016+00'
        },
        {
          id: '1664',
          course_id: '53',
          file_name: '140226_Kayttojarjestelmat_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 11:56:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.575411+00'
        },
        {
          id: '1645',
          course_id: '106',
          file_name: '140404_Tietoliikenteen_perusteet_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:55:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.823632+00'
        },
        {
          id: '1656',
          course_id: '9',
          file_name: '150505_Algorithms_in_Molecular_Biology_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-05-05 16:09:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.947611+00'
        },
        {
          id: '1665',
          course_id: '53',
          file_name: '150612_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:11:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.210456+00'
        },
        {
          id: '1646',
          course_id: '106',
          file_name: '161220_Tietoliikenteen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 10:14:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.165857+00'
        },
        {
          id: '1682',
          course_id: '53',
          file_name: '160201_Kayttojarjestelmat_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:19:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.273031+00'
        },
        {
          id: '1690',
          course_id: '53',
          file_name: '160229_Kayttojarjestelmat_MK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.378516+00'
        },
        {
          id: '1687',
          course_id: '53',
          file_name: '160309_Kayttojarjestelmat_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:14+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.432648+00'
        },
        {
          id: '1661',
          course_id: '53',
          file_name: '160404_Kayttojarjestelmat_MK5.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.488615+00'
        },
        {
          id: '1692',
          course_id: '53',
          file_name: '160418_Kayttojarjestelmat_MK6.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:27+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.64679+00'
        },
        {
          id: '1677',
          course_id: '53',
          file_name: '160512_Kayttojarjestelmat_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:20:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.753319+00'
        },
        {
          id: '1683',
          course_id: '53',
          file_name: '170130_Kayttojarjestelmat_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 21:02:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.805439+00'
        },
        {
          id: '1693',
          course_id: '53',
          file_name: '170213_Kayttojarjestelmat_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 11:09:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.042239+00'
        },
        {
          id: '1678',
          course_id: '53',
          file_name: '170227_Kayttojarjestelmat_MK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-07 08:52:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.684004+00'
        },
        {
          id: '1657',
          course_id: '66',
          file_name: '150421_Ohjelmistojen_suorituskyvyn_suunnittelu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:36:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.720501+00'
        },
        {
          id: '1652',
          course_id: '106',
          file_name: '150410_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:47:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.030759+00'
        },
        {
          id: '1643',
          course_id: '106',
          file_name: '160614_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:47:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.10001+00'
        },
        {
          id: '1649',
          course_id: '106',
          file_name: '160809_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:47:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.153845+00'
        },
        {
          id: '1671',
          course_id: '53',
          file_name: '170308_Kayttojarjestelmat_VK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.506163+00'
        },
        {
          id: '1676',
          course_id: '53',
          file_name: '170308_Kayttojarjestelmat_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.560522+00'
        },
        {
          id: '1684',
          course_id: '53',
          file_name: '160913_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.61408+00'
        },
        {
          id: '1673',
          course_id: '53',
          file_name: '160812_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.683103+00'
        },
        {
          id: '1666',
          course_id: '53',
          file_name: '170424_Kayttojarjestelmat_MK6.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-09 05:43:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.056739+00'
        },
        {
          id: '1688',
          course_id: '53',
          file_name: '170327_Kayttojarjestelmat_MK5.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-09 05:44:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.11057+00'
        },
        {
          id: '1662',
          course_id: '53',
          file_name: '170503_Kayttojarjestelmat_MK7.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-10 16:18:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.217649+00'
        },
        {
          id: '1647',
          course_id: '106',
          file_name: '160916_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:39:30+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.409611+00'
        },
        {
          id: '1668',
          course_id: '53',
          file_name: '140815_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:40:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.464171+00'
        },
        {
          id: '1681',
          course_id: '53',
          file_name: '160309_Kayttojarjestelmat_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:40:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.516629+00'
        },
        {
          id: '1663',
          course_id: '53',
          file_name: '170511_Kayttojarjestelmat_VK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-08-26 12:54:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.196875+00'
        },
        {
          id: '1642',
          course_id: '106',
          file_name: '171024_Tietoliikenteen_perusteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-12-07 17:53:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.698202+00'
        },
        {
          id: '1653',
          course_id: '106',
          file_name: '171208_Tietoliikenteen_perusteet_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:44:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.860086+00'
        },
        {
          id: '1644',
          course_id: '106',
          file_name: '180126_Tietoliikenteen_perusteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:50:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.341924+00'
        },
        {
          id: '1689',
          course_id: '53',
          file_name: '151120_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:42:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.524161+00'
        },
        {
          id: '1679',
          course_id: '53',
          file_name: '160613_Kayttojarjestelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:13:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.857778+00'
        },
        {
          id: '1696',
          course_id: '53',
          file_name: '2020_02_05_mk1e_answ.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-02-18 18:56:42.072+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1697',
          course_id: '53',
          file_name: '180207_Kayttojarjestelmat_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:30:46.609+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1714',
          course_id: '31',
          file_name: '190307_Game_Engine_Architecture_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:42:50.681+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1725',
          course_id: '29',
          file_name: '180126_Distributed_data_infrastructures_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-14 11:01:15.05+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1726',
          course_id: '29',
          file_name: '190130_Distributed_Data_Infrastructures_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 13:45:49.082+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1734',
          course_id: '39',
          file_name: '181213_Internet_protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-17 12:55:01.875+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1739',
          course_id: '39',
          file_name: '180815_Internet_protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-09-04 11:28:16.96+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1744',
          course_id: '104',
          file_name: '120918_Tietokoneen_rakenne_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:59:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.382901+00'
        },
        {
          id: '1720',
          course_id: '107',
          file_name: '121127_Tietorakenteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:00:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.434275+00'
        },
        {
          id: '1738',
          course_id: '39',
          file_name: '121016_Internet_Protocols_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:49:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.287673+00'
        },
        {
          id: '1743',
          course_id: '104',
          file_name: '130412_Tietokoneen_rakenne_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:01:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.039905+00'
        },
        {
          id: '1713',
          course_id: '31',
          file_name: '130416_Game_Engine_Architecture_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:28:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.784477+00'
        },
        {
          id: '1719',
          course_id: '107',
          file_name: '131209_Tietorakenteet_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:57:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.847603+00'
        },
        {
          id: '1717',
          course_id: '123',
          file_name: '131115_XML_metakieli_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:22:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.196298+00'
        },
        {
          id: '1742',
          course_id: '96',
          file_name: '140124_Software_Measurement_and_Quality_Modeling_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:37:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.904282+00'
        },
        {
          id: '1724',
          course_id: '107',
          file_name: '140128_Tietorakenteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:43:30+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.151707+00'
        },
        {
          id: '1721',
          course_id: '107',
          file_name: '140224_Tietorakenteet_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-24 15:24:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.469654+00'
        },
        {
          id: '1708',
          course_id: '15',
          file_name: '140227_Biological_Sequence_Analysis_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:27:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.345643+00'
        },
        {
          id: '1703',
          course_id: '52',
          file_name: '140320_Johdatus_yliopistomatematiikkaan.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:54:32+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.717909+00'
        },
        {
          id: '1722',
          course_id: '107',
          file_name: '140408_Tietorakenteet_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:06:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.931815+00'
        },
        {
          id: '1723',
          course_id: '107',
          file_name: '140408_Tietorakenteet_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:06:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.98485+00'
        },
        {
          id: '1737',
          course_id: '39',
          file_name: '140408_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:11:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.198827+00'
        },
        {
          id: '1705',
          course_id: '64',
          file_name: '140424_Network_Programming_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 07:58:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.572717+00'
        },
        {
          id: '1698',
          course_id: '53',
          file_name: '160215_Kayttojarjestelmat_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 11:19:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.326235+00'
        },
        {
          id: '1702',
          course_id: '52',
          file_name: '161219_Johdatus_yliopistomatematiikkaan_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:14:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.307911+00'
        },
        {
          id: '1706',
          course_id: '27',
          file_name: '141118_Deterministic_Distributed_Algoritms_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:29:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.730919+00'
        },
        {
          id: '1715',
          course_id: '31',
          file_name: '150421_Game_Engine_Architecture_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:29:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.837081+00'
        },
        {
          id: '1712',
          course_id: '31',
          file_name: '160419_Game_Engine_Architecture_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:29:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.908092+00'
        },
        {
          id: '1710',
          course_id: '31',
          file_name: '160812_Game_Engine_Architecture_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:29:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.962111+00'
        },
        {
          id: '1740',
          course_id: '39',
          file_name: '140815_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.447459+00'
        },
        {
          id: '1728',
          course_id: '39',
          file_name: '150415_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.500862+00'
        },
        {
          id: '1736',
          course_id: '39',
          file_name: '160122_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.553828+00'
        },
        {
          id: '1730',
          course_id: '39',
          file_name: '160812_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.605878+00'
        },
        {
          id: '1732',
          course_id: '39',
          file_name: '161025_Internet_Protocols_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.660204+00'
        },
        {
          id: '1731',
          course_id: '39',
          file_name: '161129_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:31:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.712479+00'
        },
        {
          id: '1741',
          course_id: '96',
          file_name: '141118_Software_Measurement_and_Quality_Modeling_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:43:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.434981+00'
        },
        {
          id: '1716',
          course_id: '18',
          file_name: '160228_Computability_VK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:53:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.791271+00'
        },
        {
          id: '1746',
          course_id: '104',
          file_name: '170605_Tietokoneen_rakenne_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:46:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.484184+00'
        },
        {
          id: '1727',
          course_id: '39',
          file_name: '171024_Internet_Protocols_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:18:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.161212+00'
        },
        {
          id: '1704',
          course_id: '89',
          file_name: '170809_Sarjat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 12:33:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.373978+00'
        },
        {
          id: '1729',
          course_id: '39',
          file_name: '180119_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-24 12:23:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.805721+00'
        },
        {
          id: '1701',
          course_id: '52',
          file_name: '171222_Johdatus_yliopistomatematiikkaan_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:48:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.234427+00'
        },
        {
          id: '1709',
          course_id: '31',
          file_name: '150303_Game_Engine_Architecture_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:30:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.571751+00'
        },
        {
          id: '1707',
          course_id: '2',
          file_name: '150312_Aareisulotteinen_lineaarialgebra_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:33:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.625058+00'
        },
        {
          id: '1747',
          course_id: '12',
          file_name: '150417_Approximation_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:37:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.786769+00'
        },
        {
          id: '1745',
          course_id: '104',
          file_name: '150417_Tietokoneen_rakenne_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:37:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.893271+00'
        },
        {
          id: '1733',
          course_id: '39',
          file_name: '151023_Internet_Protocols_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:40:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.217625+00'
        },
        {
          id: '1748',
          course_id: '12',
          file_name: '160415_Approximation_Algorithms_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:02:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.321181+00'
        },
        {
          id: '1699',
          course_id: '61',
          file_name: '170510_Matemaattinen_logiikka_KK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-11-19 13:50:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 11:11:11.649238+00'
        },
        {
          id: '1763',
          course_id: '95',
          file_name: '190123_Software_Architectures_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-23 16:17:42.562+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1764',
          course_id: '95',
          file_name: '181025_Software_Architectures_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 09:58:01.347+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1794',
          course_id: '48',
          file_name: '181024_Johdatus_Logiikkaan_1_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 10:08:44.552+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1793',
          course_id: '54',
          file_name: '121116_Kayttojarjestelmat_(vanha)_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:46:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.791177+00'
        },
        {
          id: '1765',
          course_id: '22',
          file_name: '130412_Data_Compression_Techniques_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:07:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.144086+00'
        },
        {
          id: '1751',
          course_id: '87',
          file_name: '130502_Rinnakkaislaskenta_grafiikkasuorittimilla_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-02 15:42:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.419915+00'
        },
        {
          id: '1799',
          course_id: '68',
          file_name: '131211_Ohjelmistojen_vaatimusmaarittely_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:52:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.581756+00'
        },
        {
          id: '1784',
          course_id: '105',
          file_name: '120503_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:52:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.633923+00'
        },
        {
          id: '1780',
          course_id: '105',
          file_name: '130502_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:53:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.689097+00'
        },
        {
          id: '1781',
          course_id: '105',
          file_name: '121213_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-12-12 12:54:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.742327+00'
        },
        {
          id: '1791',
          course_id: '105',
          file_name: '140204_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:09:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.592179+00'
        },
        {
          id: '1779',
          course_id: '105',
          file_name: '140404_Tietokoneen_toiminta_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:48:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.558485+00'
        },
        {
          id: '1775',
          course_id: '105',
          file_name: '140404_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 07:48:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.610462+00'
        },
        {
          id: '1759',
          course_id: '77',
          file_name: '140408_Ohjelmointitekniikka_JavaScript_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:12:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.302989+00'
        },
        {
          id: '1787',
          course_id: '105',
          file_name: '141218_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-02-04 15:05:27+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.354515+00'
        },
        {
          id: '1749',
          course_id: '87',
          file_name: '150505_Rinnakkaislaskenta_grafiikkasuorittimilla_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-05-05 16:07:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.893752+00'
        },
        {
          id: '1774',
          course_id: '105',
          file_name: '150612_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:13:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.368217+00'
        },
        {
          id: '1767',
          course_id: '22',
          file_name: '150609_Data_Compression_Techniques_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:28:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.901402+00'
        },
        {
          id: '1800',
          course_id: '44',
          file_name: '161220_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-08 10:13:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:46.11363+00'
        },
        {
          id: '1770',
          course_id: '105',
          file_name: '161117_Tietokoneen_toiminta_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:15:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.364552+00'
        },
        {
          id: '1786',
          course_id: '105',
          file_name: '161208_Tietokoneen_toiminta_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:15:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.416272+00'
        },
        {
          id: '1772',
          course_id: '105',
          file_name: '161215_Tietokoneen_toiminta_MK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:15:24+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.469246+00'
        },
        {
          id: '1777',
          course_id: '105',
          file_name: '161221_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:15:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.521235+00'
        },
        {
          id: '1788',
          course_id: '105',
          file_name: '170131_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:15:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.57761+00'
        },
        {
          id: '1754',
          course_id: '21',
          file_name: '160812_Cryptography_in_Networking_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.15271+00'
        },
        {
          id: '1766',
          course_id: '22',
          file_name: '150410_Data_Compression_Techniques_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:28:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:50.260086+00'
        },
        {
          id: '1798',
          course_id: '48',
          file_name: '160311_Johdatus_logiikkaan_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:33:30+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.923495+00'
        },
        {
          id: '1797',
          course_id: '48',
          file_name: '161031_Johdatus_logiikkaan_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:33:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.976573+00'
        },
        {
          id: '1795',
          course_id: '48',
          file_name: '170308_Johdatus_logiikkaan_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:33:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.028873+00'
        },
        {
          id: '1761',
          course_id: '77',
          file_name: '160809_Ohjelmointitekniikka_JavaScript_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.577622+00'
        },
        {
          id: '1760',
          course_id: '77',
          file_name: '161129_Ohjelmointitekniikka_JavaScript_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:40:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.630804+00'
        },
        {
          id: '1750',
          course_id: '87',
          file_name: '160129_Rinnakkaislaskenta_grafiikkasuorittimilla_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:42:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.220627+00'
        },
        {
          id: '1776',
          course_id: '105',
          file_name: '150410_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:46:20+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.867091+00'
        },
        {
          id: '1785',
          course_id: '105',
          file_name: '160509_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:46:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.920748+00'
        },
        {
          id: '1778',
          course_id: '105',
          file_name: '160617_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:46:32+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.978976+00'
        },
        {
          id: '1792',
          course_id: '105',
          file_name: '170407_Tietokoneen_toiminta_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:03:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.430979+00'
        },
        {
          id: '1782',
          course_id: '105',
          file_name: '170407_Tietokoneen_toiminta_en.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:03:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.485391+00'
        },
        {
          id: '1783',
          course_id: '105',
          file_name: '150504_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:40:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.569622+00'
        },
        {
          id: '1771',
          course_id: '105',
          file_name: '140909_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:40:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.621722+00'
        },
        {
          id: '1790',
          course_id: '105',
          file_name: '170619_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:41:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.72699+00'
        },
        {
          id: '1757',
          course_id: '77',
          file_name: '170124_Ohjelmointitekniikka_JavaScript_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:44:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.26825+00'
        },
        {
          id: '1769',
          course_id: '105',
          file_name: '170512_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:45:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.832417+00'
        },
        {
          id: '1773',
          course_id: '105',
          file_name: '172012_Tietokoneen_toiminta_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:49:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.289667+00'
        },
        {
          id: '1756',
          course_id: '21',
          file_name: '151216_Cryptography_in_Networking_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:49:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.894564+00'
        },
        {
          id: '1758',
          course_id: '77',
          file_name: '151218_Ohjelmointitekniikka_JavaScript_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:54:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.109832+00'
        },
        {
          id: '1753',
          course_id: '21',
          file_name: '171024_Cryptography_in_Networking_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:15:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.964045+00'
        },
        {
          id: '1752',
          course_id: '21',
          file_name: '172023_Cryptography_in_Networking_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:19:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.26414+00'
        },
        {
          id: '1796',
          course_id: '48',
          file_name: '180306_Johdatus_logiikkaan_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:22:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.426149+00'
        },
        {
          id: '1802',
          course_id: '44',
          file_name: '181218_IML_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-18 10:55:29.488+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1829',
          course_id: '40',
          file_name: '191022_Introduction_to_Big_Data_Management_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-11-07 13:56:49.886+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1846',
          course_id: '50',
          file_name: '170309_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:07:57.004+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1851',
          course_id: '50',
          file_name: '191128_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:11:52.944+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1817',
          course_id: '32',
          file_name: '121116_Hajautetut_tietokannat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:38:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.523467+00'
        },
        {
          id: '1837',
          course_id: '16',
          file_name: '101021_C_ohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:17:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.703564+00'
        },
        {
          id: '1812',
          course_id: '44',
          file_name: '101214-Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:30:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.861911+00'
        },
        {
          id: '1811',
          course_id: '44',
          file_name: '111213_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:30:39+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.914926+00'
        },
        {
          id: '1813',
          course_id: '44',
          file_name: '120131_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:30:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.967644+00'
        },
        {
          id: '1847',
          course_id: '50',
          file_name: '101022_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:39:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.181717+00'
        },
        {
          id: '1815',
          course_id: '44',
          file_name: '130412_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:08:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.25033+00'
        },
        {
          id: '1809',
          course_id: '44',
          file_name: '130412_Introduction_to_Machine_Learning.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:08:50+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.307243+00'
        },
        {
          id: '1824',
          course_id: '82',
          file_name: '130416_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:24:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.570875+00'
        },
        {
          id: '1816',
          course_id: '32',
          file_name: '140131_Hajautetut_tietokannat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 10:32:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.167527+00'
        },
        {
          id: '1835',
          course_id: '16',
          file_name: '131126_C_ohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 13:55:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.221684+00'
        },
        {
          id: '1805',
          course_id: '44',
          file_name: '140204_Introduction_to_Machine_Learning.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:12:14+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.699882+00'
        },
        {
          id: '1825',
          course_id: '82',
          file_name: '131115_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:39:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.956087+00'
        },
        {
          id: '1848',
          course_id: '50',
          file_name: '131018_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 12:17:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.841711+00'
        },
        {
          id: '1823',
          course_id: '82',
          file_name: '150302_Probabilistic_Models_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-03-03 14:53:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.520528+00'
        },
        {
          id: '1827',
          course_id: '82',
          file_name: '150609_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:07:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.130193+00'
        },
        {
          id: '1850',
          course_id: '50',
          file_name: '131122_Johdatus_tekoalyyn_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:16:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.123922+00'
        },
        {
          id: '1804',
          course_id: '44',
          file_name: '160913_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-12 19:49:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.229898+00'
        },
        {
          id: '1840',
          course_id: '16',
          file_name: '150508_C_ohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:52:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.947311+00'
        },
        {
          id: '1838',
          course_id: '16',
          file_name: '150123_C_ohjelmointi_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:53:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.002113+00'
        },
        {
          id: '1831',
          course_id: '16',
          file_name: '141125_C_ohjelmointi_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:53:43+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.053391+00'
        },
        {
          id: '1844',
          course_id: '3',
          file_name: '160614_Advanced_Course_in_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 13:22:55+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.481105+00'
        },
        {
          id: '1845',
          course_id: '3',
          file_name: '161122_Advanced_Course_in_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 13:22:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.536233+00'
        },
        {
          id: '1819',
          course_id: '32',
          file_name: '140429_Hajautetut_tietokannat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.014846+00'
        },
        {
          id: '1821',
          course_id: '32',
          file_name: '160517_Hajautetut_tietokannat_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.12563+00'
        },
        {
          id: '1826',
          course_id: '82',
          file_name: '150404_Probabilistic_Models_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:41:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.005768+00'
        },
        {
          id: '1828',
          course_id: '82',
          file_name: '160307_Probabilistic_Models_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:41:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.058111+00'
        },
        {
          id: '1839',
          course_id: '16',
          file_name: '170319_C_ohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:54:37+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.896843+00'
        },
        {
          id: '1836',
          course_id: '16',
          file_name: '161122_C_ohjelmointi_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:54:44+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.949667+00'
        },
        {
          id: '1842',
          course_id: '3',
          file_name: '170511_Advanced_Course_in_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-11 18:12:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.323026+00'
        },
        {
          id: '1822',
          course_id: '82',
          file_name: '170425_Probabilistic_Models_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-11 18:16:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.377863+00'
        },
        {
          id: '1849',
          course_id: '50',
          file_name: '170425_Johdatus_tekoalyyn_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:10:54+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.968175+00'
        },
        {
          id: '1808',
          course_id: '44',
          file_name: '170607_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:44:17+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.21558+00'
        },
        {
          id: '1834',
          course_id: '16',
          file_name: '170607_C_ohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:47:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.53916+00'
        },
        {
          id: '1852',
          course_id: '50',
          file_name: '150421_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:34:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.354957+00'
        },
        {
          id: '1843',
          course_id: '3',
          file_name: '160511_Advanced_Course_in_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:39:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.62057+00'
        },
        {
          id: '1803',
          course_id: '44',
          file_name: '171219_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:45:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:01.967201+00'
        },
        {
          id: '1820',
          course_id: '32',
          file_name: '140613_Hajautetut_tietokannat_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:29:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.449713+00'
        },
        {
          id: '1807',
          course_id: '44',
          file_name: '150417_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:38:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.948681+00'
        },
        {
          id: '1833',
          course_id: '16',
          file_name: '151024_C_ohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:41:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.36538+00'
        },
        {
          id: '1810',
          course_id: '44',
          file_name: '151216_Introduction_to_Machine_Learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:52:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.946668+00'
        },
        {
          id: '1806',
          course_id: '44',
          file_name: '160415_Introduction_to_Machine_Learning_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:03:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.425786+00'
        },
        {
          id: '1841',
          course_id: '16',
          file_name: '160415_C_ohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:03:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.480185+00'
        },
        {
          id: '1832',
          course_id: '16',
          file_name: '170222_C_ohjelmointi_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-05-03 11:40:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:58.445798+00'
        },
        {
          id: '1855',
          course_id: '50',
          file_name: '140603_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:06:17.472+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1870',
          course_id: '42',
          file_name: '151024_Introduction_to_Computer_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:41:51+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-06-29 16:54:14.947874+00',
          removed_at: '2021-06-29 16:54:14.947874+00'
        },
        {
          id: '1864',
          course_id: '33',
          file_name: '160916_Health_Informatics.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:18:05.244+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1871',
          course_id: '49',
          file_name: '180110_Johdatus_logiikkaan_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:44:13.677+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1873',
          course_id: '25',
          file_name: '181220_Deep_Learning.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 09:56:29.127+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1876',
          course_id: '115',
          file_name:
            '190506_Transaction_management_and_query_optimization_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-06 19:46:17.121+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1886',
          course_id: '71',
          file_name: '150918_Ohjelmistotekniikan_menetelmat.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:16:58.032+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1888',
          course_id: '57',
          file_name: '181219_Lineaarialgebra_ja_matriisilaskenta_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-12-19 12:00:19.289+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1889',
          course_id: '57',
          file_name: '171028_Lineaarialgebra_ja_matriisilaskenta_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-13 20:46:05.409+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1890',
          course_id: '36',
          file_name: '121123_Information_Theoretic_Modeling_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:42:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.632547+00'
        },
        {
          id: '1858',
          course_id: '50',
          file_name: '121123_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:43:48+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.737483+00'
        },
        {
          id: '1875',
          course_id: '88',
          file_name: '121112_Rinnakkaisohjelmointi_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:55:02+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.168267+00'
        },
        {
          id: '1895',
          course_id: '97',
          file_name: '121120_Software_Process_Definition_and_Management_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:55:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:36.220928+00'
        },
        {
          id: '1857',
          course_id: '50',
          file_name: '111021_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:40:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.23529+00'
        },
        {
          id: '1866',
          course_id: '76',
          file_name: '101215_Ohjelmointitekniikka_Cpp_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 16:57:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:37.393926+00'
        },
        {
          id: '1853',
          course_id: '50',
          file_name: '130416_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:26:58+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.679296+00'
        },
        {
          id: '1854',
          course_id: '50',
          file_name: '140131_Johdatus_tekoalyyn_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:16:19+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:40.861818+00'
        },
        {
          id: '1869',
          course_id: '42',
          file_name: '131115_Introduction_to_Computer_Security_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:24:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.249535+00'
        },
        {
          id: '1874',
          course_id: '93',
          file_name: '140227_Service_oriented_Software_Engineering_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:26:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.292603+00'
        },
        {
          id: '1896',
          course_id: '11',
          file_name: '140227_Analyysi_II_KK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:29:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.450826+00'
        },
        {
          id: '1885',
          course_id: '71',
          file_name: '140408_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-04-09 08:08:25+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.037734+00'
        },
        {
          id: '1883',
          course_id: '71',
          file_name: '141217_Ohjelmistotekniikan_menetelmat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-02-04 15:05:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.412482+00'
        },
        {
          id: '1897',
          course_id: '19',
          file_name: '150612_Computer_Organization_I_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:14:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.422935+00'
        },
        {
          id: '1901',
          course_id: '70',
          file_name: '150612_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:16:09+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.47599+00'
        },
        {
          id: '1882',
          course_id: '71',
          file_name: '150609_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:26:28+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.794244+00'
        },
        {
          id: '1859',
          course_id: '50',
          file_name: '160310_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-11 14:20:03+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:47.177979+00'
        },
        {
          id: '1879',
          course_id: '71',
          file_name: '160824_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:13:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.094442+00'
        },
        {
          id: '1887',
          course_id: '71',
          file_name: '161220_Ohjelmistotekniikan_menetelmat_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-15 19:13:14+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.149062+00'
        },
        {
          id: '1860',
          course_id: '50',
          file_name: '160419_Johdatus_tekoalyyn_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:22:46+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.736554+00'
        },
        {
          id: '1899',
          course_id: '70',
          file_name: '160419_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:46:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.842645+00'
        },
        {
          id: '1898',
          course_id: '70',
          file_name: '140909_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:50:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.895572+00'
        },
        {
          id: '1902',
          course_id: '70',
          file_name: '160617_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-09 13:55:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.109756+00'
        },
        {
          id: '1863',
          course_id: '33',
          file_name: '160812_Health_Informatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:22+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.179979+00'
        },
        {
          id: '1891',
          course_id: '36',
          file_name: '141022_Information_Theoretic_Modeling_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:56+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.340101+00'
        },
        {
          id: '1903',
          course_id: '70',
          file_name: '170309_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:37:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.042152+00'
        },
        {
          id: '1878',
          course_id: '71',
          file_name: '140815_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:38:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.095037+00'
        },
        {
          id: '1877',
          course_id: '71',
          file_name: '160205_Ohjelmistotekniikan_menetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:38:11+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.148298+00'
        },
        {
          id: '1881',
          course_id: '71',
          file_name: '160614_Ohjelmistotekniikan_menetelmat_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:38:15+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:53.20161+00'
        },
        {
          id: '1868',
          course_id: '111',
          file_name: '160516_Tilastollinen_paattely_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-08 10:03:23+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:57.002642+00'
        },
        {
          id: '1856',
          course_id: '50',
          file_name: '141024_Johdatus_tekoalyyn_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:44:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.161134+00'
        },
        {
          id: '1894',
          course_id: '114',
          file_name: '170628_Topologia_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:54:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.031193+00'
        },
        {
          id: '1867',
          course_id: '111',
          file_name: '170512_Tilastollinen_paattely_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:47:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.937409+00'
        },
        {
          id: '1872',
          course_id: '25',
          file_name: '171221_Deep_learning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-01-31 07:47:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.182313+00'
        },
        {
          id: '1893',
          course_id: '114',
          file_name: '180308_Topologia_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-03-09 13:52:21+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.396666+00'
        },
        {
          id: '1861',
          course_id: '10',
          file_name: '141218_Analyysi_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:30:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.519097+00'
        },
        {
          id: '1892',
          course_id: '36',
          file_name: '150414_Information_Theoretic_Modeling_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:33:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:02.67743+00'
        },
        {
          id: '1865',
          course_id: '33',
          file_name: '151022_Health_Informatics_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:40:27+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.165608+00'
        },
        {
          id: '1905',
          course_id: '79',
          file_name: '180207_Operating_Systems_MK1.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:33:59.556+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1908',
          course_id: '79',
          file_name: '180228_Operating_Systems_MK3.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:34:11.812+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1910',
          course_id: '79',
          file_name: '180307_Operating_Systems_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:34:17.304+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1911',
          course_id: '79',
          file_name: '180214_Operating_Systems_MK2.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-02-11 16:34:06.736+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1919',
          course_id: '85',
          file_name: '200303_Randomized_Algorithms_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2020-03-06 09:03:36.062+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1935',
          course_id: '14',
          file_name: '190305_Big_Data_Frameworks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-03-06 11:23:31.905+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1938',
          course_id: '14',
          file_name: '150918_Big_Data_Frameworks.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:15:51.4+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1939',
          course_id: '113',
          file_name: '191025_Todennakoisyyslaskenta_IIa_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-11-07 10:16:02.204+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1940',
          course_id: '113',
          file_name: '161028_todennakoisyyslaskenta_II_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-10-19 07:28:00.643+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1941',
          course_id: '8',
          file_name: '191018_Algorithms_for_Bioinformatics_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-12-03 10:16:22.264+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1954',
          course_id: '13',
          file_name: '190508_Automated_Logical_Reasoning_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-05-13 06:55:32.644+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1931',
          course_id: '65',
          file_name: '121123_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-02-15 15:47:06+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:35.845018+00'
        },
        {
          id: '1904',
          course_id: '70',
          file_name: '130412_Ohjelmistoprosessit_ja_ohjelmistojen_laatu_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-13 11:06:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.093004+00'
        },
        {
          id: '1944',
          course_id: '8',
          file_name: '130416_Algorithms_for_Bioinformatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-04-17 08:27:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:38.732748+00'
        },
        {
          id: '1909',
          course_id: '79',
          file_name: '140124_Operating_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:25:42+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.356826+00'
        },
        {
          id: '1928',
          course_id: '65',
          file_name: '140128_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:26:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.409618+00'
        },
        {
          id: '1950',
          course_id: '91',
          file_name: '140124_Semantic_Web_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:29:31+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:41.622284+00'
        },
        {
          id: '1948',
          course_id: '91',
          file_name: '131115_Semantic_Web_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-18 14:39:53+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.012711+00'
        },
        {
          id: '1921',
          course_id: '65',
          file_name: '131016_Ohjelmistoarkkitehtuurit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 11:59:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.736843+00'
        },
        {
          id: '1914',
          course_id: '120',
          file_name: '140225_Web_palvelinohjelmointi_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-02-26 12:19:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:42.894545+00'
        },
        {
          id: '1912',
          course_id: '120',
          file_name: '150303_Web_palvelinohjelmointi_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-03-03 14:52:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.464453+00'
        },
        {
          id: '1925',
          course_id: '65',
          file_name: '140424_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 08:00:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.626459+00'
        },
        {
          id: '1951',
          course_id: '91',
          file_name: '140424_Semantic_Web_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-04-25 08:06:52+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:44.840883+00'
        },
        {
          id: '1906',
          course_id: '79',
          file_name: '150612_Operating_Systems_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:11:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.263651+00'
        },
        {
          id: '1953',
          course_id: '62',
          file_name: '150609_Methods_for_Software_Engineering_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2015-06-12 17:25:41+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:45.740698+00'
        },
        {
          id: '1922',
          course_id: '65',
          file_name: '161028_Ohjelmistoarkkitehtuurit.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-02-16 09:21:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:48.630501+00'
        },
        {
          id: '1945',
          course_id: '8',
          file_name: '141021_Algorithms_for_Bioinformatics_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:26:01+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.693656+00'
        },
        {
          id: '1942',
          course_id: '8',
          file_name: '160129_Algorithms_for_Bioinformatics_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:26:04+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.750646+00'
        },
        {
          id: '1943',
          course_id: '8',
          file_name: '160419_Algorithms_for_Bioinformatics_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:26:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.802726+00'
        },
        {
          id: '1937',
          course_id: '14',
          file_name: '150508_Big_Data_Frameworks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:05+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.90929+00'
        },
        {
          id: '1936',
          course_id: '14',
          file_name: '160621_Big_Data_Frameworks_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:27:08+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:49.962933+00'
        },
        {
          id: '1920',
          course_id: '85',
          file_name: '160308_Randomized_Algorithms_I_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:41:59+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.110782+00'
        },
        {
          id: '1949',
          course_id: '91',
          file_name: '160617_Semantic_Web_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:43:16+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.38083+00'
        },
        {
          id: '1917',
          course_id: '120',
          file_name: '140303_Web_palvelinohjelmointi_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:29+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.637904+00'
        },
        {
          id: '1913',
          course_id: '120',
          file_name: '160803_Web_palvelinohjelmointi_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.689632+00'
        },
        {
          id: '1916',
          course_id: '120',
          file_name: '160913_Web_palvelinohjelmointi_Ruby_on_Rails_UK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:36+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.743621+00'
        },
        {
          id: '1915',
          course_id: '120',
          file_name: '170307_Web_palvelinohjelmointi_Ruby_on_Rails_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:49:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:55.797646+00'
        },
        {
          id: '1929',
          course_id: '65',
          file_name: '141021_Ohjelmistoarkkitehtuurit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:00+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.328488+00'
        },
        {
          id: '1923',
          course_id: '65',
          file_name: '161028_Ohjelmistoarkkitehtuurit_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:13+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.382646+00'
        },
        {
          id: '1927',
          course_id: '65',
          file_name: '161122_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:52:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:56.437796+00'
        },
        {
          id: '1926',
          course_id: '65',
          file_name: '170428_Ohjelmistoarkkitehtuurit.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-05-12 13:17:18+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:58.021236+00'
        },
        {
          id: '1930',
          course_id: '65',
          file_name: '170607_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-07-27 10:47:12+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:59.595532+00'
        },
        {
          id: '1934',
          course_id: '14',
          file_name: '170512_Big_Data_Frameworks_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-09-04 06:46:10+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:00.885233+00'
        },
        {
          id: '1932',
          course_id: '65',
          file_name: '151124_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 15:48:47+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:03.789769+00'
        },
        {
          id: '1955',
          course_id: '59',
          file_name: '160511_Linux_yllapito_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:11:40+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.638688+00'
        },
        {
          id: '1952',
          course_id: '91',
          file_name: '160513_Semantic_Web_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:12:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.693391+00'
        },
        {
          id: '1933',
          course_id: '65',
          file_name: '160610_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:13:35+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:04.801156+00'
        },
        {
          id: '1924',
          course_id: '65',
          file_name: '171129_Ohjelmistoarkkitehtuurit_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2018-04-23 16:15:26+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:23:05.016557+00'
        },
        {
          id: '1958',
          course_id: '34',
          file_name: '150123_Human_Computer_Interaction_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2019-01-31 10:02:45.093+00',
          created_at: '2020-07-28 20:39:31.946498+00'
        },
        {
          id: '1959',
          course_id: '34',
          file_name: '130429_Human_Computer_Interaction_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2013-05-01 15:32:33+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:39.36758+00'
        },
        {
          id: '1963',
          course_id: '51',
          file_name: '140310_Johdatus_todennakoisyyslaskentaan_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2014-03-12 12:23:49+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:43.164546+00'
        },
        {
          id: '1960',
          course_id: '34',
          file_name: '141214_Human_Computer_Interaction_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:34+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.234301+00'
        },
        {
          id: '1961',
          course_id: '34',
          file_name: '160122_Human_Computer_Interaction_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:30:38+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:51.286576+00'
        },
        {
          id: '1962',
          course_id: '51',
          file_name: '130311_Johdatus_todennakoisyyslaskentaan_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:34:14+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.08259+00'
        },
        {
          id: '1956',
          course_id: '59',
          file_name: '160617_Linux_yllapito_KK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:36:07+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:52.615598+00'
        },
        {
          id: '1957',
          course_id: '101',
          file_name: '140912_Tiedonhakumenetelmat_EK.pdf',
          mime_type: 'application/pdf',
          file_path: '00000000-0000-4000-0000-000000000000',
          upload_date: '2017-03-12 15:44:45+00',
          created_at: '2020-07-28 20:39:31.946498+00',
          updated_at: '2021-03-28 10:22:54.544357+00'
        }
      ])
    })
}
