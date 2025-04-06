// File: custom-queries/no-var.ql

/**
 * @name Avoid use of `var`
 * @description Using `var` is discouraged. Use `let` or `const` instead.
 * @kind problem
 * @problem.severity warning
 * @id js/no-var
 */

import javascript

from VariableDecl vd
where vd.getKind() = "var"
select vd, "Avoid using 'var'. Use 'let' or 'const' instead."
