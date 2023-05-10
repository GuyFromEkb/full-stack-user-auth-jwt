class EmailServices {
  sendActivateLink = async (to: string, link: string) => {
    console.log('SEND EMAIL TO: ', to, ' LINK: ', link);
  };
}

export const emailServices = new EmailServices();
