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

        fixable: "code"

    },

    create: function create(context) {

        /**
         * Get the local name of imported module
         * @param {ASTNode} node - the ImportDeclaration node
         * @returns {?string} the local name of the imported module
        */
        function getLocalModuleName(node) {
            if (node.specifiers) {
                // console.log(node.specifiers[0])
                return node.specifiers[0].local.name;
            }
        }

        /**
         * Get the name of the imported module
         * @param{ASTNode} node - the ImportDeclaration node
         * @returns {?string} the name of the module
         */
        function getModuleName(node) {
            if (node.specifiers) {
                return node.source.value;
            }
        }

        return {
            ImportDeclaration: function ImportDeclaration(node) {

                var localModule = getLocalModuleName(node);
                var originalModulePath = getModuleName(node).split("/");

                var isMatching = localModule.localeCompare(originalModulePath[originalModulePath.length - 1]);

                if (isMatching) {
                    context.report({
                        node: node,
                        message: '',
                        data: {}
                    });
                }
            }
        };
    }
};