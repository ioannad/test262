// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v15.1.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
  in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #\u{2EBF0};
  #\u{2EBF1};
  #\u{2EBF2};
  #\u{2EBF3};
  #\u{2EBF4};
  #\u{2EBF5};
  #\u{2EBF6};
  #\u{2EBF7};
  #\u{2EBF8};
  #\u{2EBF9};
  #\u{2EBFA};
  #\u{2EBFB};
  #\u{2EBFC};
  #\u{2EBFD};
  #\u{2EBFE};
  #\u{2EBFF};
  #\u{2EC00};
  #\u{2EC01};
  #\u{2EC02};
  #\u{2EC03};
  #\u{2EC04};
  #\u{2EC05};
  #\u{2EC06};
  #\u{2EC07};
  #\u{2EC08};
  #\u{2EC09};
  #\u{2EC0A};
  #\u{2EC0B};
  #\u{2EC0C};
  #\u{2EC0D};
  #\u{2EC0E};
  #\u{2EC0F};
  #\u{2EC10};
  #\u{2EC11};
  #\u{2EC12};
  #\u{2EC13};
  #\u{2EC14};
  #\u{2EC15};
  #\u{2EC16};
  #\u{2EC17};
  #\u{2EC18};
  #\u{2EC19};
  #\u{2EC1A};
  #\u{2EC1B};
  #\u{2EC1C};
  #\u{2EC1D};
  #\u{2EC1E};
  #\u{2EC1F};
  #\u{2EC20};
  #\u{2EC21};
  #\u{2EC22};
  #\u{2EC23};
  #\u{2EC24};
  #\u{2EC25};
  #\u{2EC26};
  #\u{2EC27};
  #\u{2EC28};
  #\u{2EC29};
  #\u{2EC2A};
  #\u{2EC2B};
  #\u{2EC2C};
  #\u{2EC2D};
  #\u{2EC2E};
  #\u{2EC2F};
  #\u{2EC30};
  #\u{2EC31};
  #\u{2EC32};
  #\u{2EC33};
  #\u{2EC34};
  #\u{2EC35};
  #\u{2EC36};
  #\u{2EC37};
  #\u{2EC38};
  #\u{2EC39};
  #\u{2EC3A};
  #\u{2EC3B};
  #\u{2EC3C};
  #\u{2EC3D};
  #\u{2EC3E};
  #\u{2EC3F};
  #\u{2EC40};
  #\u{2EC41};
  #\u{2EC42};
  #\u{2EC43};
  #\u{2EC44};
  #\u{2EC45};
  #\u{2EC46};
  #\u{2EC47};
  #\u{2EC48};
  #\u{2EC49};
  #\u{2EC4A};
  #\u{2EC4B};
  #\u{2EC4C};
  #\u{2EC4D};
  #\u{2EC4E};
  #\u{2EC4F};
  #\u{2EC50};
  #\u{2EC51};
  #\u{2EC52};
  #\u{2EC53};
  #\u{2EC54};
  #\u{2EC55};
  #\u{2EC56};
  #\u{2EC57};
  #\u{2EC58};
  #\u{2EC59};
  #\u{2EC5A};
  #\u{2EC5B};
  #\u{2EC5C};
  #\u{2EC5D};
  #\u{2EC5E};
  #\u{2EC5F};
  #\u{2EC60};
  #\u{2EC61};
  #\u{2EC62};
  #\u{2EC63};
  #\u{2EC64};
  #\u{2EC65};
  #\u{2EC66};
  #\u{2EC67};
  #\u{2EC68};
  #\u{2EC69};
  #\u{2EC6A};
  #\u{2EC6B};
  #\u{2EC6C};
  #\u{2EC6D};
  #\u{2EC6E};
  #\u{2EC6F};
  #\u{2EC70};
  #\u{2EC71};
  #\u{2EC72};
  #\u{2EC73};
  #\u{2EC74};
  #\u{2EC75};
  #\u{2EC76};
  #\u{2EC77};
  #\u{2EC78};
  #\u{2EC79};
  #\u{2EC7A};
  #\u{2EC7B};
  #\u{2EC7C};
  #\u{2EC7D};
  #\u{2EC7E};
  #\u{2EC7F};
  #\u{2EC80};
  #\u{2EC81};
  #\u{2EC82};
  #\u{2EC83};
  #\u{2EC84};
  #\u{2EC85};
  #\u{2EC86};
  #\u{2EC87};
  #\u{2EC88};
  #\u{2EC89};
  #\u{2EC8A};
  #\u{2EC8B};
  #\u{2EC8C};
  #\u{2EC8D};
  #\u{2EC8E};
  #\u{2EC8F};
  #\u{2EC90};
  #\u{2EC91};
  #\u{2EC92};
  #\u{2EC93};
  #\u{2EC94};
  #\u{2EC95};
  #\u{2EC96};
  #\u{2EC97};
  #\u{2EC98};
  #\u{2EC99};
  #\u{2EC9A};
  #\u{2EC9B};
  #\u{2EC9C};
  #\u{2EC9D};
  #\u{2EC9E};
  #\u{2EC9F};
  #\u{2ECA0};
  #\u{2ECA1};
  #\u{2ECA2};
  #\u{2ECA3};
  #\u{2ECA4};
  #\u{2ECA5};
  #\u{2ECA6};
  #\u{2ECA7};
  #\u{2ECA8};
  #\u{2ECA9};
  #\u{2ECAA};
  #\u{2ECAB};
  #\u{2ECAC};
  #\u{2ECAD};
  #\u{2ECAE};
  #\u{2ECAF};
  #\u{2ECB0};
  #\u{2ECB1};
  #\u{2ECB2};
  #\u{2ECB3};
  #\u{2ECB4};
  #\u{2ECB5};
  #\u{2ECB6};
  #\u{2ECB7};
  #\u{2ECB8};
  #\u{2ECB9};
  #\u{2ECBA};
  #\u{2ECBB};
  #\u{2ECBC};
  #\u{2ECBD};
  #\u{2ECBE};
  #\u{2ECBF};
  #\u{2ECC0};
  #\u{2ECC1};
  #\u{2ECC2};
  #\u{2ECC3};
  #\u{2ECC4};
  #\u{2ECC5};
  #\u{2ECC6};
  #\u{2ECC7};
  #\u{2ECC8};
  #\u{2ECC9};
  #\u{2ECCA};
  #\u{2ECCB};
  #\u{2ECCC};
  #\u{2ECCD};
  #\u{2ECCE};
  #\u{2ECCF};
  #\u{2ECD0};
  #\u{2ECD1};
  #\u{2ECD2};
  #\u{2ECD3};
  #\u{2ECD4};
  #\u{2ECD5};
  #\u{2ECD6};
  #\u{2ECD7};
  #\u{2ECD8};
  #\u{2ECD9};
  #\u{2ECDA};
  #\u{2ECDB};
  #\u{2ECDC};
  #\u{2ECDD};
  #\u{2ECDE};
  #\u{2ECDF};
  #\u{2ECE0};
  #\u{2ECE1};
  #\u{2ECE2};
  #\u{2ECE3};
  #\u{2ECE4};
  #\u{2ECE5};
  #\u{2ECE6};
  #\u{2ECE7};
  #\u{2ECE8};
  #\u{2ECE9};
  #\u{2ECEA};
  #\u{2ECEB};
  #\u{2ECEC};
  #\u{2ECED};
  #\u{2ECEE};
  #\u{2ECEF};
  #\u{2ECF0};
  #\u{2ECF1};
  #\u{2ECF2};
  #\u{2ECF3};
  #\u{2ECF4};
  #\u{2ECF5};
  #\u{2ECF6};
  #\u{2ECF7};
  #\u{2ECF8};
  #\u{2ECF9};
  #\u{2ECFA};
  #\u{2ECFB};
  #\u{2ECFC};
  #\u{2ECFD};
  #\u{2ECFE};
  #\u{2ECFF};
  #\u{2ED00};
  #\u{2ED01};
  #\u{2ED02};
  #\u{2ED03};
  #\u{2ED04};
  #\u{2ED05};
  #\u{2ED06};
  #\u{2ED07};
  #\u{2ED08};
  #\u{2ED09};
  #\u{2ED0A};
  #\u{2ED0B};
  #\u{2ED0C};
  #\u{2ED0D};
  #\u{2ED0E};
  #\u{2ED0F};
  #\u{2ED10};
  #\u{2ED11};
  #\u{2ED12};
  #\u{2ED13};
  #\u{2ED14};
  #\u{2ED15};
  #\u{2ED16};
  #\u{2ED17};
  #\u{2ED18};
  #\u{2ED19};
  #\u{2ED1A};
  #\u{2ED1B};
  #\u{2ED1C};
  #\u{2ED1D};
  #\u{2ED1E};
  #\u{2ED1F};
  #\u{2ED20};
  #\u{2ED21};
  #\u{2ED22};
  #\u{2ED23};
  #\u{2ED24};
  #\u{2ED25};
  #\u{2ED26};
  #\u{2ED27};
  #\u{2ED28};
  #\u{2ED29};
  #\u{2ED2A};
  #\u{2ED2B};
  #\u{2ED2C};
  #\u{2ED2D};
  #\u{2ED2E};
  #\u{2ED2F};
  #\u{2ED30};
  #\u{2ED31};
  #\u{2ED32};
  #\u{2ED33};
  #\u{2ED34};
  #\u{2ED35};
  #\u{2ED36};
  #\u{2ED37};
  #\u{2ED38};
  #\u{2ED39};
  #\u{2ED3A};
  #\u{2ED3B};
  #\u{2ED3C};
  #\u{2ED3D};
  #\u{2ED3E};
  #\u{2ED3F};
  #\u{2ED40};
  #\u{2ED41};
  #\u{2ED42};
  #\u{2ED43};
  #\u{2ED44};
  #\u{2ED45};
  #\u{2ED46};
  #\u{2ED47};
  #\u{2ED48};
  #\u{2ED49};
  #\u{2ED4A};
  #\u{2ED4B};
  #\u{2ED4C};
  #\u{2ED4D};
  #\u{2ED4E};
  #\u{2ED4F};
  #\u{2ED50};
  #\u{2ED51};
  #\u{2ED52};
  #\u{2ED53};
  #\u{2ED54};
  #\u{2ED55};
  #\u{2ED56};
  #\u{2ED57};
  #\u{2ED58};
  #\u{2ED59};
  #\u{2ED5A};
  #\u{2ED5B};
  #\u{2ED5C};
  #\u{2ED5D};
  #\u{2ED5E};
  #\u{2ED5F};
  #\u{2ED60};
  #\u{2ED61};
  #\u{2ED62};
  #\u{2ED63};
  #\u{2ED64};
  #\u{2ED65};
  #\u{2ED66};
  #\u{2ED67};
  #\u{2ED68};
  #\u{2ED69};
  #\u{2ED6A};
  #\u{2ED6B};
  #\u{2ED6C};
  #\u{2ED6D};
  #\u{2ED6E};
  #\u{2ED6F};
  #\u{2ED70};
  #\u{2ED71};
  #\u{2ED72};
  #\u{2ED73};
  #\u{2ED74};
  #\u{2ED75};
  #\u{2ED76};
  #\u{2ED77};
  #\u{2ED78};
  #\u{2ED79};
  #\u{2ED7A};
  #\u{2ED7B};
  #\u{2ED7C};
  #\u{2ED7D};
  #\u{2ED7E};
  #\u{2ED7F};
  #\u{2ED80};
  #\u{2ED81};
  #\u{2ED82};
  #\u{2ED83};
  #\u{2ED84};
  #\u{2ED85};
  #\u{2ED86};
  #\u{2ED87};
  #\u{2ED88};
  #\u{2ED89};
  #\u{2ED8A};
  #\u{2ED8B};
  #\u{2ED8C};
  #\u{2ED8D};
  #\u{2ED8E};
  #\u{2ED8F};
  #\u{2ED90};
  #\u{2ED91};
  #\u{2ED92};
  #\u{2ED93};
  #\u{2ED94};
  #\u{2ED95};
  #\u{2ED96};
  #\u{2ED97};
  #\u{2ED98};
  #\u{2ED99};
  #\u{2ED9A};
  #\u{2ED9B};
  #\u{2ED9C};
  #\u{2ED9D};
  #\u{2ED9E};
  #\u{2ED9F};
  #\u{2EDA0};
  #\u{2EDA1};
  #\u{2EDA2};
  #\u{2EDA3};
  #\u{2EDA4};
  #\u{2EDA5};
  #\u{2EDA6};
  #\u{2EDA7};
  #\u{2EDA8};
  #\u{2EDA9};
  #\u{2EDAA};
  #\u{2EDAB};
  #\u{2EDAC};
  #\u{2EDAD};
  #\u{2EDAE};
  #\u{2EDAF};
  #\u{2EDB0};
  #\u{2EDB1};
  #\u{2EDB2};
  #\u{2EDB3};
  #\u{2EDB4};
  #\u{2EDB5};
  #\u{2EDB6};
  #\u{2EDB7};
  #\u{2EDB8};
  #\u{2EDB9};
  #\u{2EDBA};
  #\u{2EDBB};
  #\u{2EDBC};
  #\u{2EDBD};
  #\u{2EDBE};
  #\u{2EDBF};
  #\u{2EDC0};
  #\u{2EDC1};
  #\u{2EDC2};
  #\u{2EDC3};
  #\u{2EDC4};
  #\u{2EDC5};
  #\u{2EDC6};
  #\u{2EDC7};
  #\u{2EDC8};
  #\u{2EDC9};
  #\u{2EDCA};
  #\u{2EDCB};
  #\u{2EDCC};
  #\u{2EDCD};
  #\u{2EDCE};
  #\u{2EDCF};
  #\u{2EDD0};
  #\u{2EDD1};
  #\u{2EDD2};
  #\u{2EDD3};
  #\u{2EDD4};
  #\u{2EDD5};
  #\u{2EDD6};
  #\u{2EDD7};
  #\u{2EDD8};
  #\u{2EDD9};
  #\u{2EDDA};
  #\u{2EDDB};
  #\u{2EDDC};
  #\u{2EDDD};
  #\u{2EDDE};
  #\u{2EDDF};
  #\u{2EDE0};
  #\u{2EDE1};
  #\u{2EDE2};
  #\u{2EDE3};
  #\u{2EDE4};
  #\u{2EDE5};
  #\u{2EDE6};
  #\u{2EDE7};
  #\u{2EDE8};
  #\u{2EDE9};
  #\u{2EDEA};
  #\u{2EDEB};
  #\u{2EDEC};
  #\u{2EDED};
  #\u{2EDEE};
  #\u{2EDEF};
  #\u{2EDF0};
  #\u{2EDF1};
  #\u{2EDF2};
  #\u{2EDF3};
  #\u{2EDF4};
  #\u{2EDF5};
  #\u{2EDF6};
  #\u{2EDF7};
  #\u{2EDF8};
  #\u{2EDF9};
  #\u{2EDFA};
  #\u{2EDFB};
  #\u{2EDFC};
  #\u{2EDFD};
  #\u{2EDFE};
  #\u{2EDFF};
  #\u{2EE00};
  #\u{2EE01};
  #\u{2EE02};
  #\u{2EE03};
  #\u{2EE04};
  #\u{2EE05};
  #\u{2EE06};
  #\u{2EE07};
  #\u{2EE08};
  #\u{2EE09};
  #\u{2EE0A};
  #\u{2EE0B};
  #\u{2EE0C};
  #\u{2EE0D};
  #\u{2EE0E};
  #\u{2EE0F};
  #\u{2EE10};
  #\u{2EE11};
  #\u{2EE12};
  #\u{2EE13};
  #\u{2EE14};
  #\u{2EE15};
  #\u{2EE16};
  #\u{2EE17};
  #\u{2EE18};
  #\u{2EE19};
  #\u{2EE1A};
  #\u{2EE1B};
  #\u{2EE1C};
  #\u{2EE1D};
  #\u{2EE1E};
  #\u{2EE1F};
  #\u{2EE20};
  #\u{2EE21};
  #\u{2EE22};
  #\u{2EE23};
  #\u{2EE24};
  #\u{2EE25};
  #\u{2EE26};
  #\u{2EE27};
  #\u{2EE28};
  #\u{2EE29};
  #\u{2EE2A};
  #\u{2EE2B};
  #\u{2EE2C};
  #\u{2EE2D};
  #\u{2EE2E};
  #\u{2EE2F};
  #\u{2EE30};
  #\u{2EE31};
  #\u{2EE32};
  #\u{2EE33};
  #\u{2EE34};
  #\u{2EE35};
  #\u{2EE36};
  #\u{2EE37};
  #\u{2EE38};
  #\u{2EE39};
  #\u{2EE3A};
  #\u{2EE3B};
  #\u{2EE3C};
  #\u{2EE3D};
  #\u{2EE3E};
  #\u{2EE3F};
  #\u{2EE40};
  #\u{2EE41};
  #\u{2EE42};
  #\u{2EE43};
  #\u{2EE44};
  #\u{2EE45};
  #\u{2EE46};
  #\u{2EE47};
  #\u{2EE48};
  #\u{2EE49};
  #\u{2EE4A};
  #\u{2EE4B};
  #\u{2EE4C};
  #\u{2EE4D};
  #\u{2EE4E};
  #\u{2EE4F};
  #\u{2EE50};
  #\u{2EE51};
  #\u{2EE52};
  #\u{2EE53};
  #\u{2EE54};
  #\u{2EE55};
  #\u{2EE56};
  #\u{2EE57};
  #\u{2EE58};
  #\u{2EE59};
  #\u{2EE5A};
  #\u{2EE5B};
  #\u{2EE5C};
  #\u{2EE5D};
};
