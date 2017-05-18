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
            category: "Variables",
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
        function getModuleName(node) {
            return node.arguments.value;
        }

        /**
         * Get the local name of imported module
         * @param {ASTNode} node - the ImportDeclaration node
         * @returns {?string} the local name of the imported module
        */
        function getVariableName(node) {
            return node.id.name;
        }

        return {
            VariableDeclaration: function VariableDeclaration(node) {

                if (node.callee.name == "require") {

                    var variableName = getVariableName(node);

                    var modulePath = getModuleName(node).split("/");
                    var moduleName = getModuleName[modulePath.length - 1];
                    console.log(node);

                    var isMatching = variableName.localeCompare(trueModuleName);

                    if (!isMatching) {
                        context.report({
                            node: node,
                            message: '{{syntaxA}} is not consistent with {{syntaxB}}',
                            data: {
                                syntaxA: variableName,
                                syntaxB: moduleName

                            }
                        });
                    } else {
                        context.report({
                            node: node,
                            message: 'test passed'
                        });
                    }
                }
            }
        };
    }
};