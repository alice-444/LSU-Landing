"use client";

import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import type { FC } from "react";
import { ComparisonTableProps } from "@/lib/types";

const ComparisonTable: FC<ComparisonTableProps> = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full rounded-2xl shadow-xl border-separate border-spacing-0 bg-white">
      <thead>
        <tr>
          <th className="py-4 px-4 font-semibold text-lg text-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] first:rounded-tl-2xl last:rounded-tr-2xl border-b-4 border-[var(--primary-blue)]">
            Fonctionnalité
          </th>
          <th className="py-4 px-4 font-semibold text-lg text-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] border-l border-white border-b-4 border-[var(--primary-blue)]">
            LearnSup
          </th>
          <th className="py-4 px-4 font-semibold text-lg text-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] border-l border-white border-b-4 border-[var(--primary-blue)]">
            Superprof
          </th>
          <th className="py-4 px-4 font-semibold text-lg text-white bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] border-l border-white border-b-4 border-[var(--primary-blue)] last:rounded-tr-2xl">
            Teach'R
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx, arr) => (
          <tr
            key={row.label}
            className={
              `text-base transition-colors duration-200` +
              (idx % 2 === 0 ? " bg-gray-50" : " bg-white") +
              (idx === arr.length - 1 ? " last:rounded-b-2xl" : "")
            }
          >
            <td className="py-3 px-4 font-medium whitespace-nowrap border-l border-gray-200 first:rounded-bl-2xl">
              {row.label}
            </td>
            <td className="py-3 px-4 text-center border-l border-gray-200">
              {row.lsu ? (
                <FiCheckCircle className="inline-block text-green-500 text-2xl align-middle" />
              ) : (
                <FiXCircle className="inline-block text-red-500 text-2xl align-middle" />
              )}
            </td>
            <td className="py-3 px-4 text-center border-l border-gray-200">
              {row.sp ? (
                <FiCheckCircle className="inline-block text-green-500 text-2xl align-middle" />
              ) : (
                <FiXCircle className="inline-block text-red-500 text-2xl align-middle" />
              )}
            </td>
            <td className="py-3 px-4 text-center border-l border-gray-200 last:rounded-br-2xl">
              {row.tr ? (
                <FiCheckCircle className="inline-block text-green-500 text-2xl align-middle" />
              ) : (
                <FiXCircle className="inline-block text-red-500 text-2xl align-middle" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
