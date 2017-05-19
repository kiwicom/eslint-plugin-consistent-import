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

        fixable: "code",

    },

    create(context) {         
        
        /**
         * Get the local name of imported module
         * @param {ASTNode} node - the ImportDeclaration node
         * @returns {?string} the local name of the imported module
        */
        function getModuleName(node) {
            let tmp = node.declarations[0].init.arguments[0].value
            let arr = tmp.split("/")
            
            return arr[arr.length - 1];

        }

        /**
         * Get the local name of imported module
         * @param {ASTNode} node - the ImportDeclaration node
         * @returns {?string} the local name of the imported module
        */
        function getVariableName(node) {            
            return node.declarations[0].id.name;
        }       
            
        
        return {
           VariableDeclaration: function(node){   
                            
               if (node.declarations[0].init.callee.name == "require"){
                            
                    const variableName = getVariableName(node);
                
                    
                    const moduleName = getModuleName(node);                    

                    const isMatching = variableName === moduleName;
                    
                    if(!isMatching) {
                        context.report({
                            node,
                            message: '{{syntaxA}} is consistent with {{syntaxB}}',
                            data: {
                                syntaxA: variableName,
                                syntaxB: moduleName

                        }
                    });
                  }
                  
               }
               
           }
        }
    }
};
