module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.controller.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ⚠️ 此文件由 build 自动生成，请勿手动修改
 * 源文件: src/controller/user.controller.ts
 */ __turbopack_context__.s([
    "UserController",
    ()=>UserController,
    "UserControllerMeta",
    ()=>UserControllerMeta
]);
const UserControllerMeta = {
    basePath: '/users',
    methods: {
        list: {
            method: 'GET',
            path: '',
            params: []
        },
        getById: {
            method: 'GET',
            path: '/:id',
            params: [
                {
                    name: 'id',
                    decorator: 'PathVariable',
                    decoratorArg: 'id'
                }
            ]
        },
        create: {
            method: 'POST',
            path: '',
            params: [
                {
                    name: 'dto',
                    decorator: 'RequestBody',
                    decoratorArg: ''
                }
            ]
        },
        update: {
            method: 'PUT',
            path: '/:id',
            params: [
                {
                    name: 'id',
                    decorator: 'PathVariable',
                    decoratorArg: 'id'
                },
                {
                    name: 'dto',
                    decorator: 'RequestBody',
                    decoratorArg: ''
                }
            ]
        },
        delete: {
            method: 'DELETE',
            path: '/:id',
            params: [
                {
                    name: 'id',
                    decorator: 'PathVariable',
                    decoratorArg: 'id'
                }
            ]
        }
    }
};
class UserController {
    list() {
        return null;
    }
    getById(id) {
        return null;
    }
    create(dto) {
        return null;
    }
    update(id, dto) {
        return null;
    }
    delete(id) {
        return null;
    }
}
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.entity.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ⚠️ 此文件由 build 自动生成，请勿手动修改
 * 源文件: src/entity/user.entity.ts
 */ __turbopack_context__.s([]);
;
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.dto.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ⚠️ 此文件由 build 自动生成，请勿手动修改
 * 源文件: src/dto/user.dto.ts
 */ __turbopack_context__.s([]);
;
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * API Client 入口
 * ⚠️ 此文件由 build 自动生成，请勿手动修改
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.controller.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$entity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.entity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$dto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.dto.ts [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@ai-first/nextjs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserController"],
    "UserControllerMeta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserControllerMeta"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.controller.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$entity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.entity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$dto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.dto.ts [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@ai-first/nextjs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/api/dist/client/user.controller.ts [app-rsc] (ecmascript)");
;
;
// SSR：服务端直接用 createApiClientFromMeta 调用 API
const userApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createApiClientFromMeta"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserControllerMeta"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$packages$2f$api$2f$dist$2f$client$2f$user$2e$controller$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserController"], {
    baseUrl: process.env.API_URL || 'http://localhost:3001'
});
async function fetchUsers() {
    return await userApi.list() ?? [];
}
async function HomePage() {
    const users = await fetchUsers();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-md px-4 py-6 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold",
                            children: "用户列表"
                        }, void 0, false, {
                            fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500",
                            children: [
                                "共 ",
                                users.length,
                                " 人"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-white px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 mt-0.5",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400",
                                        children: user.age ? `${user.age} 岁` : '年龄未知'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)),
                        users.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$code$2f$local$2f$ai$2d$builder$2f$AI$2d$First__Framework$2f$examples$2f$user$2d$crud$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-gray-400 py-8",
                            children: "暂无用户数据"
                        }, void 0, false, {
                            fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/code/local/ai-builder/AI-First Framework/examples/user-crud/packages/mall-mobile/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b204c577._.js.map