/**
 * @flow
 * @relayHash 41f40c28604df4f96b2b69c353317a77
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GuaranteeNeededResolver_booking$ref = any;
type MobileBookingDetail_booking$ref = any;
export type BookingType = ('MULTICITY' | 'ONE_WAY' | 'RETURN' | '%future added value');
export type MobileSelectedBookingQueryVariables = {|
  id: string,
|};
export type MobileSelectedBookingQueryResponse = {|
  +booking: ?{|
    +type: ?BookingType,
    +oneWay: ?{|
      +$fragmentRefs: (MobileBookingDetail_booking$ref & GuaranteeNeededResolver_booking$ref),
    |},
    +return: ?{|
      +$fragmentRefs: (MobileBookingDetail_booking$ref & GuaranteeNeededResolver_booking$ref),
    |},
    +multicity: ?{|
      +$fragmentRefs: (MobileBookingDetail_booking$ref & GuaranteeNeededResolver_booking$ref),
    |},
  |},
|};
*/


/*
query MobileSelectedBookingQuery(
  $id: ID!
) {
  booking(id: $id) {
    type
    oneWay {
      ...MobileBookingDetail_booking
      ...GuaranteeNeededResolver_booking
      id
    }
    return {
      ...MobileBookingDetail_booking
      ...GuaranteeNeededResolver_booking
      id
    }
    multicity {
      ...MobileBookingDetail_booking
      ...GuaranteeNeededResolver_booking
      id
    }
    id
  }
}

fragment MobileBookingDetail_booking on BookingInterface {
  type
  databaseId
  isPastBooking
  directAccessURL
  ... on BookingOneWay {
    ...OneWayTripMobile_booking
    trip {
      departure {
        time
      }
    }
  }
  ... on BookingReturn {
    ...ReturnTripMobile_booking
    outbound {
      departure {
        time
      }
    }
  }
  ... on BookingMulticity {
    ...MultiCityTripMobile_booking
    start {
      time
    }
  }
}

fragment GuaranteeNeededResolver_booking on BookingInterface {
  databaseId
  status
  contactDetails {
    phone
    email
    passenger {
      firstname
      lastname
    }
  }
  upcomingLeg(guarantee: KIWICOM) {
    guarantee
    arrival {
      time
      airport {
        city {
          name
        }
        code
        id
      }
    }
    departure {
      time
      airport {
        city {
          name
        }
        code
        id
      }
    }
    id
  }
}

fragment OneWayTripMobile_booking on BookingOneWay {
  trip {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
  }
}

fragment ReturnTripMobile_booking on BookingReturn {
  outbound {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
  inbound {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
}

fragment MultiCityTripMobile_booking on BookingMulticity {
  trips {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
  }
  end {
    airport {
      city {
        name
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "FragmentSpread",
    "name": "MobileBookingDetail_booking",
    "args": null
  },
  {
    "kind": "FragmentSpread",
    "name": "GuaranteeNeededResolver_booking",
    "args": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v7,
    v4
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v8,
    v9
  ]
},
v11 = [
  v8
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trip",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v10,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v11
    }
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v14 = [
  v9,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v7,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      },
      v4
    ]
  }
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "upcomingLeg",
  "storageKey": "upcomingLeg(guarantee:\"KIWICOM\")",
  "args": [
    {
      "kind": "Literal",
      "name": "guarantee",
      "value": "KIWICOM",
      "type": "CoveredBy"
    }
  ],
  "concreteType": "Leg",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "guarantee",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v14
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v14
    },
    v4
  ]
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "contactDetails",
  "storageKey": null,
  "args": null,
  "concreteType": "BookingContactDetails",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passenger",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "firstname",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lastname",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "outbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": [
    v10
  ]
},
v19 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v11
  }
],
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "inbound",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": false,
  "selections": v19
},
v21 = {
  "kind": "InlineFragment",
  "type": "BookingReturn",
  "selections": [
    v18,
    v20
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "trips",
  "storageKey": null,
  "args": null,
  "concreteType": "Trip",
  "plural": true,
  "selections": v19
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "end",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v11
},
v24 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "start",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v9
  ]
},
v25 = {
  "kind": "InlineFragment",
  "type": "BookingMulticity",
  "selections": [
    v22,
    v23,
    v24
  ]
},
v26 = {
  "kind": "InlineFragment",
  "type": "BookingOneWay",
  "selections": [
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MobileSelectedBookingQuery",
  "id": null,
  "text": "query MobileSelectedBookingQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    type\n    oneWay {\n      ...MobileBookingDetail_booking\n      ...GuaranteeNeededResolver_booking\n      id\n    }\n    return {\n      ...MobileBookingDetail_booking\n      ...GuaranteeNeededResolver_booking\n      id\n    }\n    multicity {\n      ...MobileBookingDetail_booking\n      ...GuaranteeNeededResolver_booking\n      id\n    }\n    id\n  }\n}\n\nfragment MobileBookingDetail_booking on BookingInterface {\n  type\n  databaseId\n  isPastBooking\n  directAccessURL\n  ... on BookingOneWay {\n    ...OneWayTripMobile_booking\n    trip {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingReturn {\n    ...ReturnTripMobile_booking\n    outbound {\n      departure {\n        time\n      }\n    }\n  }\n  ... on BookingMulticity {\n    ...MultiCityTripMobile_booking\n    start {\n      time\n    }\n  }\n}\n\nfragment GuaranteeNeededResolver_booking on BookingInterface {\n  databaseId\n  status\n  contactDetails {\n    phone\n    email\n    passenger {\n      firstname\n      lastname\n    }\n  }\n  upcomingLeg(guarantee: KIWICOM) {\n    guarantee\n    arrival {\n      time\n      airport {\n        city {\n          name\n        }\n        code\n        id\n      }\n    }\n    departure {\n      time\n      airport {\n        city {\n          name\n        }\n        code\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment OneWayTripMobile_booking on BookingOneWay {\n  trip {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ReturnTripMobile_booking on BookingReturn {\n  outbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MultiCityTripMobile_booking on BookingMulticity {\n  trips {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  end {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MobileSelectedBookingQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": v3
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MobileSelectedBookingQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
              v2,
              v4,
              v5,
              v6,
              v12,
              v13,
              v15,
              v16,
              v17,
              v21,
              v25
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": [
              v20,
              v2,
              v5,
              v6,
              v15,
              v18,
              v13,
              v17,
              v16,
              v4,
              v26,
              v25
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": [
              v22,
              v2,
              v5,
              v6,
              v15,
              v17,
              v13,
              v23,
              v24,
              v16,
              v4,
              v26,
              v21
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1c094a174a891e939fbc264d67eb9e25';
module.exports = node;
