import { isSameMonth } from "date-fns";
export const incomeService = {
  //Get the list of incomes
  getIncomes() {
    return Promise.resolve([
      {
        id: 1,
        customer_name: "Alice",
        game_name: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        period: "30 days",
        date: "2025-03-30",
      },
      {
        id: 2,
        customer_name: "Bob",
        game_name: "Super Mario Odyssey",
        price: 49.99,
        period: "32 days",
        date: "2025-03-31",
      },
      {
        id: 3,
        customer_name: "Charlie",
        game_name: "Mario Kart 8 Deluxe",
        price: 49.99,
        period: "33 days",
        date: "2025-04-01",
      },
      {
        id: 4,
        customer_name: "David",
        game_name: "Animal Crossing: New Horizons",
        price: 54.99,
        period: "34 days",
        date: "2025-04-02",
      },
      {
        id: 5,
        customer_name: "Emma",
        game_name: "Pokémon Scarlet",
        price: 59.99,
        period: "35 days",
        date: "2025-03-29",
      },
      {
        id: 6,
        customer_name: "Frank",
        game_name: "Luigi’s Mansion 3",
        price: 49.99,
        period: "36 days",
        date: "2025-04-03",
      },
      {
        id: 7,
        customer_name: "Grace",
        game_name: "Xenoblade Chronicles 3",
        price: 59.99,
        period: "37 days",
        date: "2025-04-04",
      },
      {
        id: 8,
        customer_name: "Hannah",
        game_name: "Kirby and the Forgotten Land",
        price: 49.99,
        period: "38 days",
        date: "2025-03-28",
      },
      {
        id: 9,
        customer_name: "Isaac",
        game_name: "Bayonetta 3",
        price: 59.99,
        period: "39 days",
        date: "2025-04-05",
      },
      {
        id: 10,
        customer_name: "Jack",
        game_name: "Fire Emblem Engage",
        price: 59.99,
        period: "40 days",
        date: "2025-04-06",
      },
      {
        id: 11,
        customer_name: "Katie",
        game_name: "Donkey Kong Country: Tropical Freeze",
        price: 49.99,
        period: "41 days",
        date: "2025-04-07",
      },
      {
        id: 12,
        customer_name: "Leo",
        game_name: "Splatoon 3",
        price: 59.99,
        period: "42 days",
        date: "2025-04-08",
      },
      {
        id: 13,
        customer_name: "Mia",
        game_name: "Persona 5 Royal",
        price: 59.99,
        period: "43 days",
        date: "2025-04-09",
      },
      {
        id: 14,
        customer_name: "Nathan",
        game_name: "Octopath Traveler II",
        price: 59.99,
        period: "44 days",
        date: "2025-04-10",
      },
      {
        id: 15,
        customer_name: "Olivia",
        game_name: "Triangle Strategy",
        price: 59.99,
        period: "45 days",
        date: "2025-03-27",
      },
      {
        id: 16,
        customer_name: "Peter",
        game_name: "Advance Wars 1+2: Re-Boot Camp",
        price: 59.99,
        period: "46 days",
        date: "2025-04-11",
      },
    ]);
  },

  //Calculate the total income for the current month
  calculateTotalIncomeForCurrentMonth() {
    return this.getIncomes().then((incomes) => {
      const currentMonth = new Date();
      //filter the incomes to get only the ones from the current month
      const currentMonthIncomes = incomes.filter((income) => {
        const incomeDate = new Date(income.date);
        return isSameMonth(incomeDate, currentMonth);
      });
      //Calculate the total income
      return currentMonthIncomes.reduce((sum, income) => sum + income.price, 0);
    });
  },
};
