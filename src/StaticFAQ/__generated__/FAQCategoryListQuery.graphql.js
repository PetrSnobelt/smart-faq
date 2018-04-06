/**
 * @flow
 * @relayHash 91356dbbacf2dd1fd96511e4c0789de0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQCategory_category$ref = any;
export type FAQCategoryListQueryVariables = {| |};
export type FAQCategoryListQueryResponse = {|
  +allFAQCategories: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FAQCategory_category$ref,
      |},
    |}>,
  |},
|};
*/


/*
query FAQCategoryListQuery {
  allFAQCategories(language: en) {
    edges {
      node {
        id
        ...FAQCategory_category
      }
    }
  }
}

fragment FAQCategory_category on FAQCategory {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "language",
    "value": "en",
    "type": "Language"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQCategoryListQuery",
  "id": null,
  "text": "query FAQCategoryListQuery {\n  allFAQCategories(language: en) {\n    edges {\n      node {\n        id\n        ...FAQCategory_category\n      }\n    }\n  }\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQCategoryListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": "allFAQCategories(language:\"en\")",
        "args": v0,
        "concreteType": "FAQCategoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQCategory",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "FragmentSpread",
                    "name": "FAQCategory_category",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FAQCategoryListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFAQCategories",
        "storageKey": "allFAQCategories(language:\"en\")",
        "args": v0,
        "concreteType": "FAQCategoryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategoryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "FAQCategory",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '7e173537cffa406b475e2055431a7fe8';
module.exports = node;
