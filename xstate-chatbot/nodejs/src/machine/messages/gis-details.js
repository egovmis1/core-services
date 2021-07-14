const messages = {
  gisInfo: {
    prompt: {
      preamble: {
        en_IN: 'What would you like to do?',
        pa_IN: 'ਤੁਸੀਂ ਕੀ ਜਾਣਨਾ ਚਾਹੋਗੇ?',
        hi_IN: 'आप क्या जानना चाहेंगे?',
      },
      options: {
        list: ['addNewProperty', 'validateExistingProperty'],
        messageBundle: {
          addNewProperty: {
            en_IN: 'Add new property',
            pa_IN: 'ਨਵੀਂ ਜਾਇਦਾਦ ਸ਼ਾਮਲ ਕਰੋ',
            hi_IN: 'नई संपत्ति जोड़ें',
          },
          validateExistingProperty: {
            en_IN: 'Validate existing property',
            pa_IN: 'ਮੌਜੂਦਾ ਸੰਪਤੀ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰੋ',
            hi_IN: 'मौजूदा संपत्ति सत्यापित करें',
          },
        },
      },
    },
  },
  propertyUseList: {
    prompt: {
      options: {
        list: ['residential', 'commerical', 'residentialcommerical', 'industrial'],
        messageBundle: {
          residential: {
            en_IN: 'Residential',
            pa_IN: 'ਰਿਹਾਇਸ਼ੀ',
            hi_IN: 'आवासीय',
          },
          commerical: {
            en_IN: 'Commercial',
            pa_IN: 'ਵਪਾਰਕ',
            hi_IN: 'व्यावसायिक',
          },
          residentialcommerical: {
            en_IN: 'Residential-Commercial',
            pa_IN: 'ਰਿਹਾਇਸ਼ੀ-ਵਪਾਰਕ',
            hi_IN: 'आवासीय वाणिज्यिक',
          },
          industrial: {
            en_IN: 'Industrial',
            pa_IN: 'ਉਦਯੋਗਿਕਰੋ',
            hi_IN: 'औद्योगिक',
          },
        },
      },
    },
  },
  updateExistingPropertyMemu: {
    prompt: {
      prompt: {
        preamble: {
          en_IN: 'What would you like to update? ',
          pa_IN: 'ਤੁਸੀਂ ਕੀ ਅਪਡੇਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?  ',
          hi_IN: 'आप क्या अपडेट करना चाहते हैं?  ',
        },
        options: {
          list: ['OldHouseNo', 'blockNo', 'ownerName', 'contactNo', 'NoOfFloors', 'WaterConnection', 'SewageConnection', 'propertyId'],
          messageBundle: {
            OldHouseNo: {
              en_IN: 'House Number',
              pa_IN: 'ਘਰ ਦਾ ਨੰਬਰ',
              hi_IN: 'घर का नंबर',
            },
            blockNo: {
              en_IN: 'Block Number',
              pa_IN: 'ਬਲਾਕ ਨੰਬਰ',
              hi_IN: 'ब्लॉक संख्या',
            },
            ownerName: {
              en_IN: 'Owner Name',
              pa_IN: 'ਮਾਲਕ ਦਾ ਨਾਮ',
              hi_IN: 'मालिक का नाम',
            },
            contactNo: {
              en_IN: 'Contact Name',
              pa_IN: 'ਸੰਪਰਕ ਨਾਮ',
              hi_IN: 'संपर्क नाम',
            },
            NoOfFloors: {
              en_IN: 'No Of Floors',
              pa_IN: 'ਫਰਸ਼ਾਂ ਦੀ ਕੋਈ ਗਿਣਤੀ',
              hi_IN: 'मंजिलों की संख्या',
            },
            WaterConnection: {
              en_IN: 'Water Connection',
              pa_IN: 'ਮੌਜੂਦਾ ਸੰਪਤੀ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰੋ',
              hi_IN: 'मौजूदा संपत्ति सत्यापित करें',
            },
            SewageConnection: {
              en_IN: 'Sewage Connection',
              pa_IN: 'ਮੌਜੂਦਾ ਸੰਪਤੀ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰੋ',
              hi_IN: 'मौजूदा संपत्ति सत्यापित करें',
            },
            propertyId: {
              en_IN: 'Property Id',
              pa_IN: 'ਮੌਜੂਦਾ ਸੰਪਤੀ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰੋ',
              hi_IN: 'मौजूदा संपत्ति सत्यापित करें',
            },
          },
        },
      },
    },
  },
  selectLanguageGis: {
    prompt: {
      preamble: {
        en_IN: 'Sat Sri Akal! Welcome to the GIS Chatbot.',
      },
      options: {
        list: ['pa_IN', 'hi_IN', 'en_IN'],
        messageBundle: {
          en_IN: {
            en_IN: 'English',
          },
          hi_IN: {
            en_IN: 'हिंदी',
          },
          pa_IN: {
            en_IN: 'ਪੰਜਾਬੀ',
          },
        },
      },
    },
  },
  invalidOption: {
    en_IN: 'Please enter valid input',
    pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਵੈਧ ਇੰਪੁੱਟ ਦਾਖਲ ਕਰੋ',
    hi_IN: 'कृपया मान्य इनपुट दर्ज करें',
  },
  gisMobileNumber: {
    prompt: {
      en_IN: 'Please Enter your Mobile Number for Validation',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਪ੍ਰਮਾਣਿਕਤਾ ਲਈ ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
      hi_IN: 'कृपया प्रमाणीकरण के लिए अपना मोबाइल नंबर दर्ज करें',
    },
    error: {
      en_IN: 'Your Entered Mobile Number is Invalid',
      pa_IN: 'ਤੁਹਾਡਾ ਦਰਜ ਕੀਤਾ ਮੋਬਾਈਲ ਨੰਬਰ ਗਲਤ ਹੈ ',
      hi_IN: 'आपका दर्ज मोबाइल नंबर गलत है',
    },
  },
  temporaryParcelId: {
    prompt: {
      en_IN: 'Add Temporary parcel id',
      pa_IN: 'ਅਸਥਾਈ ਪਾਰਸਲ ਆਈਡੀ ਸ਼ਾਮਲ ਕਰੋ',
      hi_IN: 'एक अस्थायी पार्सल आईडी जोड़ें',
    },
  },
  addhouseNo: {
    prompt: {
      en_IN: 'Please enter your house number',
      pa_IN: 'ਆਪਣੇ ਘਰ ਦਾ ਨੰਬਰ ਦਰਜ ਕਰੋ ਜੀ',
      hi_IN: 'कृपया अपने घर का नंबर दर्ज करें',
    },
  },
  addblockNo: {
    prompt: {
      en_IN: 'Please enter your block number',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਬਲਾਕ ਨੰਬਰ ਦਰਜ ਕਰੋ',
      hi_IN: 'कृपया अपना ब्लॉक नंबर दर्ज करें',
    },
  },
  addownerName: {
    prompt: {
      en_IN: 'Please enter Owner name',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਮਾਲਕ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ',
      hi_IN: 'कृपया स्वामी का नाम दर्ज करें',
    },
  },
  addcontactNo: {
    prompt: {
      en_IN: 'Please enter your Contact number',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸੰਪਰਕ ਨੰਬਰ ਦਰਜ ਕਰੋ',
      hi_IN: 'ब्कृपया अपना संपर्क नंबर दर्ज करें',
    },
    error: {
      en_IN: 'Entered Mobile Number is incorrect',
      pa_IN: 'ਦਰਜ ਕੀਤਾ ਮੋਬਾਈਲ ਨੰਬਰ ਗਲਤ ਹੈ',
      hi_IN: 'दर्ज किया गया मोबाइल नंबर गलत है',
    }
  },
  addpropertyuse: {
    prompt: {
      en_IN: 'Please enter your Property use',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਜਾਇਦਾਦ ਦੀ ਵਰਤੋਂ ਦਾਖਲ ਕਰੋ',
      hi_IN: 'कृपया अपनी संपत्ति का उपयोग दर्ज करें',
    },
  },
  addnoOfFloor: {
    prompt: {
      en_IN: 'Please enter Number of floors (eg. G1 with Basement ,G1+1 etc) ',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਫ਼ਰਸ਼ਾਂ ਦੀ ਗਿਣਤੀ ਦਰਜ ਕਰੋ(eg. G1 with Basement ,G1+1 etc) ',
      hi_IN: 'कृपया मंजिलों की संख्या दर्ज करें(eg. G1 with Basement ,G1+1 etc) ',
    },
  },
  addwaterconnection: {
    prompt: {
      en_IN: 'Please enter your Water connections number',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਣੀ ਦੇ ਸੰਪਰਕ ਨੰਬਰ ਭਰੋ',
      hi_IN: 'कृपया अपना जल संपर्क नंबर दर्ज करें',
    },
  },
  addsewageconnection: {
    prompt: {
      en_IN: 'Please enter your Sewage connection number',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸੀਵਜ ਕੁਨੈਕਸ਼ਨ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
      hi_IN: 'कृपया अपना सीवेज कनेक्शन नंबर दर्ज करें',
    },
  },
  addpropertyId: {
    prompt: {
      en_IN: 'Please enter your Property id as per tax property',
      pa_IN: 'ਟੈਕਸ ਜਾਇਦਾਦ ਦੇ ਅਨੁਸਾਰ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਜਾਇਦਾਦ ID ਦਾਖਲ ਕਰੋ',
      hi_IN: 'कृपया कर योग्य संपत्ति के अनुसार अपनी संपत्ति आईडी दर्ज करें',
    },
  },
  validateExistingProperty: {
    prompt: {
      en_IN: 'Please Enter your parcel ID',
      pa_IN: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਪਾਰਸਲ ID ਦਿਓ',
      hi_IN: 'ब्कृपया अपना पार्सल आईडी दर्ज करें',
    },
  },
  houseNo: {
    prompt: {
      en_IN: '1. House No :',
      pa_IN: '1. ਮਕਾਨ ਨੰ:',
      hi_IN: '1. मकान नंबर:',
    },
  },
  blockNo: {
    prompt: {
      en_IN: '2. Block No :',
      pa_IN: '2. ਬਲਾਕ ਨੰ: ',
      hi_IN: '2. ब्लॉक नंबर: ',
    },
  },
  contactNo: {
    prompt: {
      en_IN: '4. Contact No :',
      pa_IN: '4. ਸੰਪਰਕ ਨੰਬਰ: ',
      hi_IN: '4. संपर्क फ़ोन नंबर',
    },
  },
  ownerName: {
    prompt: {
      en_IN: '3. Owner Name :',
      pa_IN: '3. ਮਾਲਕ ਦਾ ਨਾਮ:',
      hi_IN: '3. मालिक का नाम:',
    },
  },
  propertyUse: {
    prompt: {
      en_IN: '5. Property Type :',
      pa_IN: '5. ਜਾਇਦਾਦ ਦੀ ਕਿਸਮ: ',
      hi_IN: '5. संपत्ति के प्रकार: ',
    },
  },
  noOfFloors: {
    prompt: {
      en_IN: '6. No of floors :',
      pa_IN: '6. ਫ਼ਰਸ਼ਾਂ ਦੀ ਗਿਣਤੀ: ',
      hi_IN: '6. मंजिलों की संख्या: ',
    },
  },
  waterConnection: {
    prompt: {
      en_IN: '7. Water Connection :',
      pa_IN: '7. ਪਾਣੀ ਦਾ ਸੰਪਰਕ: ',
      hi_IN: '7. जल संपर्क: ',
    },
  },
  sewerageConnection: {
    prompt: {
      en_IN: '8. Sewerage Connection :',
      pa_IN: '8. ਸੀਵਰੇਜ ਕੁਨੈਕਸ਼ਨ: ',
      hi_IN: '8. सीवरेज कनेक्शन: ',
    },
  },
  proprtyId: {
    prompt: {
      en_IN: '9. Property id as per Tax property:',
      pa_IN: '9. ਟੈਕਸ ਪ੍ਰਾਪਰਟੀ ਦੇ ਅਨੁਸਾਰ ਪ੍ਰਾਪਰਟੀ ਆਈਡੀ: ',
      hi_IN: '9. कर संपत्ति के अनुसार संपत्ति आईडी: ',
    },
  },
  anyOtherUpdate: {
    prompt: {
      en_IN: 'Any Other Update :',
      pa_IN: 'ਕੋਈ ਹੋਰ ਅਪਡੇਟ:',
      hi_IN: 'कोई अन्य अपडेट:',
    },
  },
  updateProperty: {
    prompt: {
      en_IN: 'Your property have been updated successfully',
      pa_IN: 'ਤੁਹਾਡੀ ਜਾਇਦਾਦ ਸ਼ਾਮਲ ਕੀਤੀ ਗਈ ਹੈ ਧੰਨਵਾਦ!',
      hi_IN: 'आपकी संपत्ति जोड़ दी गई है। धन्यवाद!',
    },
  },
  propertyAdded: {
    prompt: {
      en_IN: 'Your Property is Added . Thank You!',
      pa_IN: 'ਤੁਹਾਡੀ ਜਾਇਦਾਦ ਸ਼ਾਮਲ ਕੀਤੀ ਗਈ ਹੈ ਧੰਨਵਾਦ!',
      hi_IN: 'आपकी संपत्ति जोड़ दी गई है। धन्यवाद!',
    },
  },
};
const grammers = {
  binaryChoice: {
    prompt: {
      en_IN: '\n1. Yes\n2. No',
      pa_IN: '\n1. ਜੀ\n2. ਨਹੀਂ',
      hi_IN: '\n1. हाँ \n2. नहीं',
    },
    grammer: [
      { intention: 'YES', recognize: ['1'] },
      { intention: 'NO', recognize: ['2'] },
    ],
  },
};

module.exports.messages = messages;
module.exports.grammers = grammers;

