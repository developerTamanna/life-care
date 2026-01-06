import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from 'recharts';
import { motion } from 'framer-motion';
import {
  FaStethoscope,
  FaHeartbeat,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone,
} from 'react-icons/fa';

// Medical specialty icons mapping
const medicalIcons = {
  Cardiology: FaHeartbeat,
  Neurology: FaBrain,
  Dermatology: FaStethoscope,
  Dentistry: FaTooth,
  Ophthalmology: FaEye,
  Orthopedics: FaBone,
  Pediatrics: FaStethoscope,
  General: FaStethoscope,
};

// Medical-themed color palette
const MEDICAL_COLORS = [
  '#3B82F6', // Blue - Primary
  '#10B981', // Green - Success
  '#6366F1', // Indigo - Professional
  '#F59E0B', // Amber - Warning
  '#EF4444', // Red - Emergency
  '#8B5CF6', // Purple - Specialist
  '#EC4899', // Pink - Women's Health
  '#14B8A6', // Teal - Wellness
];

// Custom shape for medical-themed bars
const getMedicalBarPath = (x, y, width, height) => {
  const radius = 6; // Rounded corners
  return `
    M${x + radius},${y}
    L${x + width - radius},${y}
    Q${x + width},${y} ${x + width},${y + radius}
    L${x + width},${y + height}
    L${x},${y + height}
    L${x},${y + radius}
    Q${x},${y} ${x + radius},${y}
    Z
  `;
};

const MedicalBar = (props) => {
  const { fill, x, y, width, height, specialty } = props;

  // Get appropriate icon for specialty
  const IconComponent = medicalIcons[specialty] || FaStethoscope;

  return (
    <g>
      {/* Main Bar */}
      <path
        d={getMedicalBarPath(x, y, width, height)}
        fill={fill}
        fillOpacity="0.9"
        stroke={fill}
        strokeWidth="1"
      />

      {/* Medical Icon inside bar (for taller bars) */}
      {height > 30 && (
        <g transform={`translate(${x + width / 2 - 8}, ${y + height / 2 - 8})`}>
          <IconComponent size={16} fill="#FFFFFF" opacity="0.7" />
        </g>
      )}

      {/* Subtle gradient overlay */}
      <linearGradient id={`gradient-${x}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={fill} stopOpacity="0.9" />
        <stop offset="100%" stopColor={fill} stopOpacity="0.6" />
      </linearGradient>
    </g>
  );
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const IconComponent = medicalIcons[data.specialty] || FaStethoscope;

    return (
      <motion.div
        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center mb-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
            style={{ backgroundColor: `${payload[0].fill}20` }}
          >
            <IconComponent
              className="text-sm"
              style={{ color: payload[0].fill }}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{label}</p>
            <p className="text-sm text-gray-600">
              {data.specialty || 'General Medicine'}
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Consultation Fee:</span>
            <span className="font-semibold text-gray-900">{data.fees}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Patients Today:</span>
            <span className="font-semibold text-gray-900">
              {data.patients || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Experience:</span>
            <span className="font-semibold text-gray-900">
              {data.experience || 'N/A'} years
            </span>
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
};

const ConeChart = ({ data }) => {
  // Process data to include proper structure
  const processedData = data.map((item, index) => ({
    name: item.name || `Dr. ${index + 1}`,
    fees: parseInt(item.fee?.replace(/[^0-9]/g, '') || 1000),
    specialty: item.speciality || 'General',
    patients: Math.floor(Math.random() * 50) + 10, // Sample data
    experience: item.experience?.replace(/\D/g, '') || '10',
    color: MEDICAL_COLORS[index % MEDICAL_COLORS.length],
  }));

  // Animation variants
  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-8"
      variants={chartVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Appointment Fee Analysis
          </h3>
          <p className="text-sm text-gray-600">
            Consultation fees across different medical specialties
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {processedData.slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-center text-xs">
              <div
                className="w-3 h-3 rounded-sm mr-1"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600">{item.specialty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickMargin={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `৳${value}`}
              tickMargin={10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />

            <Bar dataKey="fees" name="Consultation Fee" radius={[4, 4, 0, 0]}>
              {processedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                  strokeWidth={1}
                />
              ))}

              {/* Value Labels on top of bars */}
              <LabelList
                dataKey="fees"
                position="top"
                formatter={(value) => `৳${value}`}
                fill="#374151"
                fontSize={12}
                fontWeight="500"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Footer */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="w-4 h-4 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            Higher fees may indicate specialist expertise
          </div>

          <div className="text-xs text-gray-400 mt-2 sm:mt-0">
            {processedData.length} doctors • Updated today
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConeChart;
