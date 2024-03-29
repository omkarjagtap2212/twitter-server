"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const resolvers_1 = require("./resolvers");
const queries_1 = require("./queries");
const types_1 = require("./types");
const mutation_1 = require("./mutation");
exports.User = {
    resolvers: resolvers_1.resolvers,
    queries: queries_1.queries,
    types: types_1.types,
    mutations: mutation_1.mutations
};
