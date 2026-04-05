import { prisma } from "./prisma";
import { User, PatientProfile, NurseProfile } from "@prisma/client";

export async function getUserWithProfile(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      patientProfile: true,
      nurseProfile: true,
    },
  });
  return user;
}

export async function getPatientWithNurses(patientId: string) {
  const patient = await prisma.patientProfile.findUnique({
    where: { id: patientId },
    include: {
      user: true,
      bookings: {
        include: {
          nurse: {
            include: {
              user: true,
              specializations: true,
            },
          },
          service: true,
        },
      },
      sessions: {
        include: {
          nurse: {
            include: {
              user: true,
            },
          },
          vitals: true,
          activities: true,
        },
      },
    },
  });
  return patient;
}

export async function getNurseWithPatients(nurseId: string) {
  const nurse = await prisma.nurseProfile.findUnique({
    where: { id: nurseId },
    include: {
      user: true,
      specializations: true,
      bookings: {
        include: {
          patient: {
            include: {
              user: true,
            },
          },
          service: true,
        },
      },
      sessions: {
        include: {
          patient: {
            include: {
              user: true,
            },
          },
          vitals: true,
        },
      },
      reviews: true,
    },
  });
  return nurse;
}

export async function searchNursesByServiceType(serviceType: string, area?: string) {
  const nurses = await prisma.nurseProfile.findMany({
    where: {
      serviceArea: area ? { contains: area } : undefined,
      serviceTypes: {
        some: {
          serviceType: serviceType as any,
        },
      },
    },
    include: {
      user: true,
      specializations: true,
      serviceTypes: true,
    },
    orderBy: {
      rating: "desc",
    },
  });
  return nurses;
}

export async function getBookingWithDetails(bookingId: string) {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      patient: {
        include: {
          user: true,
        },
      },
      nurse: {
        include: {
          user: true,
        },
      },
      service: true,
      payment: true,
      sessions: {
        include: {
          vitals: true,
          activities: true,
          report: true,
        },
      },
    },
  });
  return booking;
}
