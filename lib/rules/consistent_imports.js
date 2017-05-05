/**
 * Created by Frantisek Farkas on 4.5.17.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent import",
            category: "Possible Errors",
            recommended: true
        },

        fixable: "code",

    },

    create(context) {

        /**
         * Get the local name of imported module
         * @param {ASTNode} node - the ImportDeclaration node
         * @returns {?string} the local name of the imported module
        */
        function getLocalModuleName(node) {
            if (node.specifiers[0]){
                return node.specifier[0].local.name;
            }
        }

        /**
         * Get the name of the imported module
         * @param{ASTNode} node - the ImportDeclaration node
         * @returns {?string} the name of the module
         */
        function getModuleName(node) {
            if (node.specifirers[0]){
                return node.source.value;
            }
        }

        return {
            ImportDeclaration: function(node) {
            
            let localModule = getLocalModuleName(node);
            let originalModulePath = getModuleName(node);
            let originalModule = str.split("/");

            if(localModule.localeCompare(originalModule[originalModule.length - 1])){
                context.report({
                    node,
                    message: '',
                    data: {

                    }
                });
            }


        };
    }
};
