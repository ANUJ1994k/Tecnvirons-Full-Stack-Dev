import supabase from "../db/supabaseClient.js";

export const fetchTransactions = async ({ page, limit, search }) => {
  const offset = (page - 1) * limit;

  let query = supabase
    .from("transactions")
    .select("id, customer_name, product, amount, status, created_at")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (search) {
    query = query.ilike("customer_name", `%${search}%`);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data;
};