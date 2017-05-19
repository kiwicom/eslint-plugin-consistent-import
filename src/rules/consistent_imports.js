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
<<<<<<< HEAD
        */
=======
         */
>>>>>>> d11f83baaa460db3781b60a6cbc934ade159d379
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
            ImportDeclaration: function(node) {
<<<<<<< HEAD
            
                const localModule = getLocalModuleName(node);
                const originalModulePath = getModuleName(node).split("/");
                
=======

                const localModule = getLocalModuleName(node);
                const originalModulePath = getModuleName(node).split("/");

>>>>>>> d11f83baaa460db3781b60a6cbc934ade159d379
                const moduleWithoutExtension = originalModulePath[originalModulePath.length - 1].split(".")[0]

                const isMatching = localModule.localeCompare(moduleWithoutExtension)

                if (isMatching) {
                    context.report({
                        node,
                        message: '{{syntaxA}} is not consistent with {{syntaxB}}',
                        data: {
                            syntaxA: localModule,
                            syntaxB: moduleWithoutExtension

                        }
                    });
<<<<<<< HEAD
                }            
                
                
=======
                }


>>>>>>> d11f83baaa460db3781b60a6cbc934ade159d379
            },
        }
    }
};
