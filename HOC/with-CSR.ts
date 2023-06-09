export const withCSR = next => async ctx => {
  const isCSR = ctx.req.url?.startsWith("/_next")

  if (isCSR) {
    return {
      props: {}
    }
  }

  return next?.(ctx)
}

/*
Тихий роутинг:
По сути отменяет запуск этих функций при переходах по роутам getServerSideProps и getStaticProps
https://github.com/vercel/next.js/discussions/32243
https://nextjs.org/docs/routing/shallow-routing
https://reactdev.ru/nextjs/routing/shallow/
_________________

В настоящее время неглубокая маршрутизация nextjs v12.2 работает только для изменений URL на текущей странице. Предостережения по мелкой маршрутизации nextjs
это означает, что если вы перейдете из /posts/10 в /posts/15 с параметром small = true, getServerSideProps не будет вызываться, но если вы перейдете из /home в /posts/15, вызовется getServerSideProps, даже если вы используете неглубокую маршрутизацию, и это будет получать ненужные данные, даже если они доступны в кеше.

Я нашел обходной путь, который проверяет, является ли этот запрос к getServerSideProps запросом навигации на стороне клиента или нет. Если это так, то возвращает пустой объект для реквизита и предотвращает выборку данных на сервере.
мы не можем предотвратить вызов getServerSideProps при переходе между разными страницами, но мы можем предотвратить выборку ненужных данных в getServerSideProps.

Вот реализация CSR HOC:
*/
