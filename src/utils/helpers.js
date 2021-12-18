export function handleApiResponse(res) {
    // if (parseInt(res.status / 100) === 2) {
    //     return { status: 'success', msg: '' };
    // }
    if (!res)
      return { status_name: 'error', msg: 'باید دوباره لاگین کنید' };
  
    if (res.status === 400) return { status_name: 'error', data: res.data };
  
    if (res.status === 423)
      return {
        status_name: 'error',
        msg: 'این آیتم دارای وابستگی هایی میباشد، ابتدا آنها حذف نمایید.'
      };
  
    if (res.status === 401)
      return { status_name: 'error', msg: 'باید دوباره لاگین کنید.' };
  
    if (res.status === 404) return { status_name: 'error', msg: 'یافت نشد' };
  
    if (res.status === 500)
      return { status_name: 'error', msg: 'خطا در گرفتن اطلاعات' };
  
    if (res.status === 502)
      return {
        status_name: 'error',
        msg: 'سایت در حال تعمیر لطفا لحظاتی بعد دوباره امتحان کنید'
      };
  
    if (res.status === 503)
      return { status_name: 'error', msg: 'این سرویس در حال حاضر در دسترس نیست' };
  
    if (res.status === 504)
      return {
        status_name: 'error',
        msg: 'پاسخی از سرور دریافت نشد لطفا دوباره امتحان کنید'
      };
  
    return { status_name: 'error', msg: res.data.detail };
  }